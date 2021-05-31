import React, { useState, useRef, useEffect } from 'react'

import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const MobileNavbar = ({ children }) => {
  const history = useHistory()

  const [drawer, setDrawer] = React.useState(false)

  const toggleDrawer = (open) => {
    if (open === undefined) {
      setDrawer(!drawer)
      return
    }
    setDrawer(open)
  }

  function goToPricing() {
    history.push('/pricing')
  }

  function goToHome() {
    history.push('/')
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WebKnit
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawer} onClose={() => toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemIcon>{<MailIcon />}</ListItemIcon>
              <ListItemText primary="Get a WebKnit" />
            </ListItem>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary="Create an account" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <div style={{ height: '100px' }} />
      {children}
    </div>
  )
}

export default MobileNavbar
