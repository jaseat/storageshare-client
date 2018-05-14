import React, { Component } from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { history } from '../../store';

class Layout extends Component {
  componentWillMount() {
    if(this.props.currentUser) {
      history.push('/r/' + this.props.currentUser);
    }
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm login={this.props.login} currentUser={this.props.currentUser} />
      </div>
    );
  }
}

Layout.propTypes = {
  login: PropTypes.func,
  currentUser: PropTypes.integer,
}

export default Layout;