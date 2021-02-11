import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6dcbe0',
      light: '#a2feff',
      dark: '#349aae'
    },
    secondary: {
      main: '#eaa29f',
      light: '#ffd4d0',
      dark: '#b67371'
    },
    background: {
      default: '#bd2e2e'
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