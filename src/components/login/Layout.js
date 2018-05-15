import React, { Component } from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { history } from '../../store';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

class Layout extends Component {
  componentWillMount() {
    if (this.props.currentUser) {
      history.push('/r/' + this.props.currentUser);
    }
  }
  render() {
    return (
      <Paper style={{padding: 16}}>
        <Typography variant='title'>
          Log In
        </Typography>
        <LoginForm login={this.props.login} currentUser={this.props.currentUser} />
      </Paper>
    );
  }
}

Layout.propTypes = {
  login: PropTypes.func,
  currentUser: PropTypes.integer,
}

export default Layout;