import React, { useState, useRef, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  IconButton,
  Avatar,
  Divider,
  Container,
} from '@material-ui/core'

import { Info } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'

import deviceImage from '../assets/device.png'

import AnimatedBackground from '../components/AnimatedBackground'
import Footer from '../components/Footer'
import Seperator from '../components/Seperator'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: '24px',
    marginLeft: '16px',
    marginRight: '16px',
  },
  centeredContainer: {
    justifyContent: 'center',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
}))

const Home = () => {
  const classes = useStyles()

  const history = useHistory()

  function goToPricing() {
    history.push('/pricing')
  }

  return (
    <div>
      <div className={classes.mainContainer}>
        <Grid container justifyContent="center" alignSelf="center" spacing={4}>
          <Grid item>
            <div className={classes.centeredContainer}>
              <div
                style={{
                  height: 'auto',
                  maxWidth: 250,
                }}
              >
                <img
                  style={{
                    height: 'auto',
                    width: '100%',
                  }}
                  src={deviceImage}
                  alt="WebKnit Device"
                />
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.centeredContainer}>
              <div>
                <span>
                  <Typography
                    style={{ display: 'inline-block', marginLeft: '8px', marginRight: '8px' }}
                    variant="h2"
                  >
                    WebKnit
                  </Typography>
                  <Typography
                    style={{ display: 'inline-block', marginLeft: '8px', marginRight: '8px' }}
                    variant="h5"
                  >
                    From Vitrical
                  </Typography>
                </span>
              </div>
              <div>
                <Typography style={{ marginLeft: '8px', marginRight: '8px' }} variant="title">
                  Integrate your network devices with ease
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Container>
        <br />
        <Seperator title="Introduction" />
        <br />
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item sm={6}>
            <div className={classes.centeredContainer}>
              <div
                style={{
                  height: 'auto',
                  maxWidth: 450,
                }}
              >
                <img
                  style={{
                    height: 'auto',
                    width: '100%',
                  }}
                  src={deviceImage}
                  alt="WebKnit Device"
                />
              </div>
            </div>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h6">
              WebKnit allows you to connect your network devices together using easy-to-learn
              WebKnit scripts.
              <br />
              <br />
              Once your events are scripted, your WebKnit device will act as a middle-man that
              allows your devices to talk to each other and send commands to one another.
              <br />
              <br />
              Your device will automatically detect your network devices and integrate with them.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Seperator title="Unified Control Panel" />
        <br />
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item sm={6}>
            <Typography variant="h6">
              Webknit's unified control panel makes it easy to send requests to any of your internet
              devices.
              <br />
              <br />
              For example, you can turn on or off connected lights, locks or other home network
              services provided by various manufacturers and brands.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.centeredContainer}>
              <div
                style={{
                  height: 'auto',
                  maxWidth: 380,
                }}
              >
                <img
                  style={{
                    height: 'auto',
                    width: '100%',
                  }}
                  src={deviceImage}
                  alt="WebKnit Device"
                />
              </div>
            </div>
          </Grid>
        </Grid>
        <br />
        <Seperator title="Network Monitoring" />
        <br />
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item sm={6}>
            <Typography variant="h6">
              Your WebKnit device also lets you monitor your network from anywhere.
              <br />
              <br />
              Get information such as active internet devices, number of requests send through your
              network, and downtime.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.centeredContainer}>
              <div
                style={{
                  height: 'auto',
                  maxWidth: 380,
                }}
              >
                <img
                  style={{
                    height: 'auto',
                    width: '100%',
                  }}
                  src={deviceImage}
                  alt="WebKnit Device"
                />
              </div>
            </div>
          </Grid>
        </Grid>
        <br />
        <Seperator title="Event Scripting" />
        <br />
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item sm={4}>
            <div className={classes.centeredContainer}>
              <div
                style={{
                  height: 'auto',
                  maxWidth: 380,
                }}
              >
                <img
                  style={{
                    height: 'auto',
                    width: '100%',
                  }}
                  src={deviceImage}
                  alt="WebKnit Device"
                />
              </div>
            </div>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h6">
              WebKnit automatically gathers information about your network and the devices on it
              securely and safely.
              <br />
              <br />
              Design your own customized actions and events to take control of your network and send
              commands to your devices based on the network information gethered.
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Seperator title="Setup" />
        <br />
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item sm={6}>
            <Typography variant="h6">
              1. Plug your WebKnit device into power and ethernet.
              <br />
              <br />
              2. Scan the QR code that comes with your WebKnit device.
              <br />
              <br />
              3. Set up your account and get scripting!
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.centeredContainer}>
              <div
                style={{
                  height: 'auto',
                  maxWidth: 380,
                }}
              >
                <img
                  style={{
                    height: 'auto',
                    width: '100%',
                  }}
                  src={deviceImage}
                  alt="WebKnit Device"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
