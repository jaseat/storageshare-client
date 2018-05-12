import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import List, { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import { history } from '../../store';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const navigation = [
      {
        name: 'Dash',
        path: '/',
      },{
        name: 'Rent',
        path: '/rent',
      }, {
        name: 'My Items',
        path: '/items',
      }, {
        name: 'Settings',
        path: '/settings',
      },
    ];
    return (
      <List component="nav" style={styles.sideBar}>
        {navigation.map( (e,i) => (
          <Button 
            key={i}
            component={Link}
            to={`/r/${this.props.match.params.user}${e.path}`}>
              {e.name}
            </Button>
        ))}
      </List>
    )
  }
}

const styles = {
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    height: '600px',
    padding: '0px',
    overflow: 'auto',
    width: '240px',
  },
}

export default Navbar;