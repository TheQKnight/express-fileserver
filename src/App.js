import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { DarkTheme } from './Themes'

import Home from './routes/Home'
import Dashboard from './routes/Dashboard'

import MobileNavbar from './components/MobileNavbar'
import DesktopNavbar from './components/DesktopNavbar'
import AnimatedBackground from './components/AnimatedBackground'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Switch>
)

const App = () => {
  const useMobile = useMediaQuery('(max-width:650px)')

  return (
    <ThemeProvider theme={DarkTheme}>
      <Router>
        <CssBaseline />
        <AnimatedBackground>
          {useMobile ? <MobileNavbar children={routes} /> : <DesktopNavbar children={routes} />}
        </AnimatedBackground>
      </Router>
    </ThemeProvider>
  )
}

export default App
