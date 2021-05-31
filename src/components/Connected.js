import * as React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Title from './Title'

function preventDefault(event) {
  event.preventDefault()
}

const Deposits = () => {
  return (
    <React.Fragment>
      <Title>Total Connected Devices</Title>
      <Typography component="p" variant="h4">
        5
      </Typography>
      <Typography color="textSecondary" sx={{ flex: 1 }}>
        3 potential devices detected
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View devices
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Deposits
