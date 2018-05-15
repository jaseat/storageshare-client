import { createMuiTheme } from 'material-ui/styles';

const StorageShare = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#f4f4eb',
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


export default StorageShare;