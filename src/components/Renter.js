import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Renter extends Component {
  render() {
    return (
      <div>
        <Navbar match={this.props.match}/>
      </div>
    )
  }
}

export default Renter;