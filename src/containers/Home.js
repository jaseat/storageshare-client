import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { typography } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import LoginForm from './login/Login'


const img = require('../components/Theme/img/Sacramento_Skyline.jpg');

class Home extends Component {
  state = {
    value: 0
  };
  handleTabChange = (e, value) => {
    this.setState({ value });
  }
  render() {
    return (
      <div>
        <img src={img} alt='sacskyline' style={{ maxWidth: '100%', position: 'absolute', zIndex: '-999' }} />
        <Grid container direction='row' justify='center' alignItems='flex-start'>
          <Grid item xs={6}>
            <Typography variant='display3'>
              Hello there!
          </Typography>
            <Typography variant='display1'>
              StorageQ - Is your ultimate choice to store your items.
          </Typography>
          </Grid>
          <Grid item xs={6}>
          <Grid container direction='row' justify='flex-end' alignItems='flex-start'>
            <LoginForm/>
          </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home;