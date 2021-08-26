import { createTheme } from '@material-ui/core'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff0055',
      light: '#ff3377',
      dark: '#b2003b',
    },
    secondary: {
      main: '#272727',
      light: '#525252',
      dark: '#1b1b1b',
    },
    text: {
      primary: '#ffffff',
      secondary: '#323232',
    },
    grey: {
      A100: '#ababab',
    },
    background: {
      default: '#181818',
      paper: '#0e0e0e',
    },
  },
})

export default darkTheme
