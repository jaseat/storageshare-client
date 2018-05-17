import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./containers/Home";
import Renter from "./containers/Renter";
import SignUp from "./containers/SignUpForm";
import Login from "./containers/login/Login";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { StorageShare } from "./components/Theme/StorageShareTheme";
import CssBaseline from "material-ui/CssBaseline";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={StorageShare}>
        <CssBaseline />
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Typography variant="button" color="inherit">
              Sclique
            </Typography>
            <div
              id="log-in container"
              style={{ position: "absolute", right: 0 }}
            >
              <Button component={Link} to="/r/1">
                Admin
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/r/:user" component={Renter} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
