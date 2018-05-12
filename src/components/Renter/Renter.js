import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Dash, Items, NewBoxForm } from '../../containers/Renter'

import Paper from 'material-ui/Paper';

class Renter extends Component {
  render() {
    var {match} = this.props;
    return (
      <div style={styles.grid}>
        <Navbar match={match}/>
        <Paper>
          <Switch>
            <Route exact path={`/r/${match.params.user}/`} component={Dash} />
            <Route exact path={`/r/${match.params.user}/items`} render={
              props=> (
                <Items {...props} userId={match.params.user}/>
              )
            } />
            <Route exact path = {`/r/${match.params.user}/rent`} component={NewBoxForm} />
          </Switch>
        </Paper>
      </div>
    )
  }
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "0.5fr 4fr",
    width: "960px",
    height: "500px",
    margin: "auto",
  }
}

export default Renter;