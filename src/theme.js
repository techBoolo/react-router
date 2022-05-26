import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
      light: '#6d6d6d',
      dark: '#1b1b1b',
      contrastText: '#fff'
    },
    secondary: {
      main: '#eeeeee',
      light: '#ffffff',
      dark: '#bcbcbc',
      contrastText: '#000'
    }
  }
})

export default theme;
