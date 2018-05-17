import { createMuiTheme } from "material-ui/styles";

const StorageShare = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#424242"
    },
    primary: {
      main: "#eeeeee",
      light: "#ffffff",
      dark: "#bcbcbc",
      contrastText: "#000000"
    },
    secondary: {
      main: "#388e3c",
      light: "#6abf69",
      dark: "#00600f",
      contrastText: "#ffffff"
    }
  },
  typography: {
    fontSize: 16
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:after": {
          backgroundColor: "#388e3c"
        }
      }
    },
    MuiTypography: {
      colorTextSecondary: {
        color: "rgba(0, 0, 0, 0.54)"
      }
    }
  }
});

const StorageShareLight = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#424242"
    },
    primary: {
      main: "#388e3c",
      light: "#6abf69",
      dark: "#00600f",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#ffffff"
    }
  },
  typography: {
    fontSize: 16
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:after": {
          backgroundColor: "#388e3c"
        }
      }
    },
    MuiTypography: {
      colorTextSecondary: {
        color: "rgba(0, 0, 0, 0.54)"
      }
    }
  }
});

export { StorageShare, StorageShareLight };
