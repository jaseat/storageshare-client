import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Renter from './containers/Renter';
import SignUp from './containers/SignUpForm';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/r/:user" component={Renter} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    );
  }
}

export default App;
