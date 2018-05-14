import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Renter from './containers/Renter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { StorageShareDark } from './components/Theme/PortfolioTheme'
import CssBaseline from 'material-ui/CssBaseline';
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={StorageShareDark}>
        <CssBaseline />
        <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="display1" color="inherit">
            StorageShare.com
          </Typography>
        </Toolbar>
      </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/r/:user" component={Renter} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
