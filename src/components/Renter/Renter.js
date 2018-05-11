import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Dash, Items } from '../../containers/Renter'

class Renter extends Component {
  render() {
    var {match} = this.props;
    return (
      <div style={styles.grid}>
        <Navbar match={this.props.match}/>
        <Switch>
          <Route exact path={`/r/${match.params.user}/`} component={Dash} />
          <Route exact path={`/r/${match.params.user}/items`} component={Items} />
        </Switch>
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