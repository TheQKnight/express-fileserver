import React from 'react'

import { Divider, Typography } from '@material-ui/core'

function Seperator({ title }) {
  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Divider style={{ flexGrow: 1, backgroundColor: 'gray' }} />
      <Typography
        style={{
          marginLeft: '16px',
          marginRight: '16px',
          color: 'white',
        }}
        variant="h4"
      >
        {title}
      </Typography>
      <Divider style={{ flexGrow: 1, backgroundColor: 'gray' }} />
    </div>
  )
}

export default Seperator
