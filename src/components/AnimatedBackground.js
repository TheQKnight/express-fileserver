import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useResizeDetector } from 'react-resize-detector'
class CanvasLine {
  static MAX_WIDTH = 70
  static MIN_WIDTH = 40
  static MAX_HEIGHT = 3
  static MIN_HEIGHT = 3

  x
  y
  direction
  velocity
  id
  color
  width
  height
  currentWidth
  currentHeight
  deleted = false
  constructor({ x, y, direction, velocity, color }) {
    this.x = x
    this.y = y
    this.direction = direction
    this.velocity = velocity
    this.color = color
    this.width = Math.floor(
      (CanvasLine.MAX_WIDTH - CanvasLine.MIN_WIDTH) * Math.random() + CanvasLine.MIN_WIDTH
    )
    this.height = Math.floor(
      (CanvasLine.MAX_HEIGHT - CanvasLine.MIN_HEIGHT) * Math.random() + CanvasLine.MIN_HEIGHT
    )
    this.currentWidth = this.width
    this.currentHeight = this.height
  }

  render(ctx) {
    ctx.fillStyle = this.color
    const fromX = this.x - this.currentWidth / 2
    const fromY = this.y - this.currentHeight / 2
    const toX = this.currentWidth
    const toY = this.currentHeight
    ctx.fillRect(fromX, fromY, toX, toY)
  }

  calcMath(mouseX, mouseY, mouseRadius) {
    const mouseDistanceX = this.x - mouseX
    const mouseDistanceY = this.y - mouseY
    const mouseDistance = Math.sqrt(Math.pow(mouseDistanceX, 2) + Math.pow(mouseDistanceY, 2))

    if (mouseDistance < mouseRadius) {
      this.currentHeight = this.height * (mouseRadius / mouseDistance)
      this.currentWidth = this.width * (mouseRadius / mouseDistance)
      if (this.currentHeight > this.height * 4) this.currentHeight = this.height * 4
      if (this.currentWidth > this.width * 4) this.currentWidth = this.width * 4
    } else {
      this.currentHeight = this.height
      this.currentWidth = this.width
    }

    if (this.direction === 'right') this.x += this.velocity
    if (this.direction === 'left') this.x -= this.velocity
  }
}

class Canvas {
  canvas
  ctx
  canvasLines = []
  mouseX = null
  mouseY = null
  interval = null
  focusListener
  blurListener
  renderLoop = null
  constructor({ canvas, width, height }) {
    this.canvas = canvas
    this.canvas.width = width || 100
    this.canvas.height = height || 100
    this.ctx = canvas.getContext('2d')
    this.mouseRadius = 600
  }

  onMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect()
    this.mouseX = e.clientX - rect.left
    this.mouseY = e.clientY - rect.top
  }

  onBlur() {
    this.disable()
  }

  onFocus() {
    this.enable()
  }

  makeLine() {
    const direction = Math.random() > 0.5 ? 'left' : 'right'
    let x = direction === 'left' ? this.canvas.width + 100 : -100
    let y = Math.floor(this.canvas.height * Math.random())
    this.canvasLines.push(
      new CanvasLine({
        x,
        y,
        direction,
        velocity: Math.random() * 2 + 2,
        color: Math.random() > 0.5 ? '#2d2e2d' : '#252625',
      })
    )
  }

  setLine(x, y) {
    const direction = Math.random() > 0.5 ? 'left' : 'right'

    this.canvasLines.push(
      new CanvasLine({
        x,
        y,
        direction,
        velocity: Math.random() * 2 + 2,
        color: Math.random() > 0.5 ? '#2d2e2d' : '#252625',
      })
    )
  }

  init() {
    window.addEventListener('focus', this.onFocus.bind(this))
    window.addEventListener('blur', this.onBlur.bind(this))
    document.addEventListener('mousemove', this.onMouseMove.bind(this))

    // Make initial lines
    const count = this.canvas.height / 20

    for (var i = 0; i < count; i++) {
      this.setLine(Math.random() * this.canvas.width, Math.random() * this.canvas.height)
    }

    this.enable()
  }

  uninit() {
    window.removeEventListener('focus', this.onFocus.bind(this))
    window.removeEventListener('blur', this.onBlur.bind(this))
    document.removeEventListener('mousemove', this.onMouseMove.bind(this))

    this.disable()
  }

  cullLines(padding = 200) {
    const minX = -padding
    const maxX = this.canvas.width + padding
    const minY = -padding
    const maxY = this.canvas.height + padding
    this.canvasLines = this.canvasLines.filter((line) => {
      if (line.x > maxX || line.x < minX) return true
      if (line.y > maxY || line.y > minY) return true
      return false
    })
  }

  enable() {
    if (this.interval) return

    this.interval = function () {
      const time = 300000 / this.canvas.height
      this.makeLine()
      this.cullLines()

      setTimeout(
        function () {
          if (!this.interval) return
          this.interval()
        }.bind(this),
        time
      )
    }

    this.interval()

    this.startRenderLoop()
  }

  disable() {
    this.interval = null
    this.renderLoop = null
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.canvasLines.forEach((line) => {
      line.calcMath(this.mouseX, this.mouseY, this.mouseRadius)
      line.render(this.ctx)
    })
  }

  startRenderLoop() {
    this.renderLoop = function () {
      this.render()

      requestAnimationFrame(
        function () {
          if (!this.renderLoop) return
          this.renderLoop()
        }.bind(this)
      )
    }
    this.renderLoop()
  }

  setDimensions(width, height) {
    this.canvas.width = width
    this.canvas.height = height
  }
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
  },
  canvas: {
    position: 'absolute',
    zIndex: 0,
    backgroundColor: theme.palette.background.dark,
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    overflow: 'hidden',
  },
}))

const AnimatedBackground = ({ children }) => {
  const classes = useStyles()

  const mainContainer = useRef()
  const canvas = useRef()
  const lineBox = useRef(null)

  const { width, height, ref: contentContainer } = useResizeDetector()

  useEffect(() => {
    if (!width || !height) return
    if (lineBox.current) {
      lineBox.current.setDimensions(width, height)
      return
    }
    lineBox.current = new Canvas({ canvas: canvas.current, width, height })
    lineBox.current.init()
  }, [width, height])

  useEffect(() => {
    return () => {
      return () => {
        if (!lineBox.current) return
        lineBox.current.uninit()
      }
    }
  }, [])

  return (
    <div ref={mainContainer} className={classes.mainContainer}>
      <canvas ref={canvas} className={classes.canvas} />
      <div ref={contentContainer} className={classes.contentContainer}>
        {children}
      </div>
    </div>
  )
}

export default AnimatedBackground
