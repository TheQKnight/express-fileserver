import * as React from 'react'
import { Link, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core'

import Title from './Title'

const rows = [
  {
    id: 0,
    name: 'Lutron Connect',
    address: '192.168.1.55',
    mac: 'F3:56:8C:DG:2A:5G',
    date: new Date().toUTCString(),
  },
  {
    id: 1,
    name: 'Amazon Echo',
    address: '192.168.1.75',
    mac: '7H:56:L6:DG:2A:5G',
    date: new Date().toUTCString(),
  },
  {
    id: 2,
    name: 'Google Home',
    address: '192.168.1.54',
    mac: '6C:56:6A:M6:2A:5G',
    date: new Date().toUTCString(),
  },
  {
    id: 3,
    name: 'Tesla Powerwall',
    address: '192.168.1.14',
    mac: '9A:36:LA:DG:2A:5G',
    date: new Date().toUTCString(),
  },
  {
    id: 4,
    name: 'Microline',
    address: '192.168.1.97',
    mac: 'GB:56:GR:DG:2A:5G',
    date: new Date().toUTCString(),
  },
]

function preventDefault(event) {
  event.preventDefault()
}

const Orders = () => {
  return (
    <React.Fragment>
      <Title>Recognized Devices</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Mac Address</TableCell>
            <TableCell>Recognized Date</TableCell>
            <TableCell align="right">Go to details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.mac}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">
                <Button variant="contained">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Manage
      </Link>
    </React.Fragment>
  )
}

export default Orders
