import { createMuiTheme } from 'material-ui/styles';

const StorageShareDark = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#424242',
    },
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#D32F2F',
    },
  },
  typography: {
    fontSize: 16
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:after': {
          backgroundColor: '#2196F3',
        }
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: '#3d3d3d',
      }
    },
  },
});
const StorageShareLight = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#f2e48c',
    },
    primary: {
      main: '#f21a3e',
    },
    secondary: {
      main: '#fff',
    },
  },
  overrides: {
    MuiCardMedia: {
      root: {
        height: 400,
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          backgroundColor: '#f21a3e',
        }
      },
    },
  },
});

export { StorageShareDark, StorageShareLight };