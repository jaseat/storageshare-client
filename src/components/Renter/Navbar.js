import React, { Component } from 'react';
import List, { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography'

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const navigation = [
      {
        name: 'Dash',
        path: '/',
      }, {
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
      <List component="nav">
        {navigation.map((e, i) => (
          <ListItem
            button
            key={i}
            component={Link}
            to={`/r/${this.props.match.params.user}${e.path}`}>
            <Typography variant='title' align='center'>
              {e.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default Navbar;