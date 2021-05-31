import * as React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import Title from './Title'

// Generate Sales Data
function createData(time, amount) {
  return { time, amount }
}

const data = [
  createData('00:00', 0),
  createData('03:00', 2),
  createData('06:00', 1),
  createData('09:00', 0),
  createData('12:00', 3),
  createData('15:00', 2),
  createData('18:00', 0),
  createData('21:00', 2),
  createData('24:00', 3),
]

const Chart = () => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>Activity</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Requests
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="linear"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

export default Chart