import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Dash, Items } from '../../containers/Renter'
import NewRentalPage from '../../components/Renter/NewRentalPage'
import Grid from 'material-ui/Grid'


class Renter extends Component {
  render() {
    var { match } = this.props;
    return (
      <Grid container>
        <Grid item sm={2}>
          <Navbar match={match} />
        </Grid>
        <Grid item sm={8}>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Switch>
              <Route exact path={`/r/${match.params.user}/`} component={Dash} />
              <Route exact path={`/r/${match.params.user}/items`} render={
                props => (
                  <Items {...props} userId={match.params.user} />
                )
              } />
              <Route exact path={`/r/${match.params.user}/rent`} component={NewRentalPage} />
            </Switch>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Renter;