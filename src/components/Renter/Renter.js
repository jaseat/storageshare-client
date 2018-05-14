import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Dash, Items, NewBoxForm } from '../../containers/Renter'
import Grid from 'material-ui/Grid'


class Renter extends Component {
  render() {
    var { match } = this.props;
    return (
        <Grid container>
          <Grid item xs={2}>
            <Navbar match={match} />
          </Grid>
          <Grid item xs={10}>
          <Grid container direction = 'row' justify = 'center' alignItems='center'>
            <Switch>
              <Route exact path={`/r/${match.params.user}/`} component={Dash} />
              <Route exact path={`/r/${match.params.user}/items`} render={
                props => (
                  <Items {...props} userId={match.params.user} />
                )
              } />
              <Route exact path={`/r/${match.params.user}/rent`} component={NewBoxForm} />
            </Switch>
            </Grid>
          </Grid>
        </Grid>

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