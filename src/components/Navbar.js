import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import List, { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import { history } from '../store';

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
      <div style={styles.sideBar}>
        <List component="nav">
          {navigation.map( (e,i) => (
            <ListItem 
              key={i}
              button 
              onClick={()=>history.push(`/r/${this.props.match.params.user}${e.path}`)}>
                {e.name}
              </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

const styles = {
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '600px',
    padding: '0px',
    overflow: 'auto',
    width: '240px',
  },
}

export default Navbar;