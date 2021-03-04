import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
      light: cyan[400],
      dark: cyan[600]
    },
    secondary: {
      main: '#eaa29f',
      light: '#ffd4d0',
      dark: '#b67371'
    },
    background: {
      light: '#F7F8F2',
      medium: '#E2E2E2',
      dark: '#C4C4C4'
    },
  },
  typography: {
    h1: {
      fontSize: '2.25rem',
      '@media (min-width: 289px)': {
        fontSize: '2.5rem',
      }
    },
    h2: {
      fontSize: '1.175rem',
      '@media (min-width: 349px)': {
        fontSize: '1.5rem',
      }
    },
    h5: {
      fontSize: '1.1rem',

    },
    caption: {
      fontSize: '0.8rem'
    },
    button: {
      fontSize: '1.1rem'
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#ffd4d0'
      }
    }
  }
});