import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
// import { darkScrollbar } from '@material-ui/core'

let DarkTheme = createMuiTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#892cbf',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2196f3',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#892cbf',
      contrastText: '#ffffff',
    },
    background: {
      default: '#242423',
      light: '#FBFAF5',
      main: '#333533',
      dark: '#242423',
      contrastText: '#ffffff',
      darkText: '#242423',
      paper: '#333533',
    },
  },
  typography: {
    h1: {
      fontFamily: ['Franklin Gothic Medium'],
    },
    h2: {
      fontFamily: ['Franklin Gothic Medium'],
    },
    h3: {
      fontFamily: ['Franklin Gothic'],
    },
    h4: {
      fontFamily: ['Franklin Gothic'],
    },
    h5: {
      fontFamily: ['Franklin Gothic'],
    },
  },
})

let LightTheme = createMuiTheme({
  palette: {
    mode: 'light',
    accent: {
      main: '#892cbf',
      contrastText: '#ffffff',
    },
    primary: {
      main: '#892cbf',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2196f3',
      contrastText: '#ffffff',
    },
    // background: {
    //   default: '#333533',
    //   light: '#FBFAF5',
    //   main: '#333533',
    //   dark: '#242423',
    //   contrastText: '#ffffff',
    //   darkText: '#242423',
    // },
  },
})

// DarkTheme.components = {
//   ...DarkTheme.components,
//   MuiCssBaseline: {
//     styleOverrides: {
//       body: DarkTheme.palette.mode === 'dark' ? darkScrollbar() : null,
//     },
//   },
// }
// LightTheme.components = {
//   ...LightTheme.components,
//   MuiCssBaseline: {
//     styleOverrides: {
//       body: LightTheme.palette.mode === 'dark' ? darkScrollbar() : null,
//     },
//   },
// }

DarkTheme = responsiveFontSizes(DarkTheme)
LightTheme = responsiveFontSizes(LightTheme)

export { DarkTheme, LightTheme }

export default DarkTheme
