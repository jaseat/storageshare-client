import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fail: false,
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    var res = await fetch('/login', {
      body : JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'same-origin',
    });
    if(res.status === 401){
      this.setState({fail: true});
    }
    else if(res.status === 200){
      var data = await res.json();
      this.props.login(data.id);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.fail && <h1>Email or Password is incorrect</h1>}
        <TextField
        id="email"
        label="Email"
        value={this.state.email}
        onChange={this.handleChange('email')}
        /> <br />
        <TextField
        id="password"
        label="Password"
        value={this.state.password}
        onChange={this.handleChange('password')}
        />
        <Button 
          onClick={this.handleSubmit}
          disabled={!this.state.email || !this.state.password}
        >
          Login
        </Button>
      </form>
    );
  }
}

export default LoginForm;