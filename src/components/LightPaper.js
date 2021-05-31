import { Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { LightTheme } from '../Themes'

const LightPaper = (props) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Paper {...props} />
    </ThemeProvider>
  )
}

export default LightPaper
