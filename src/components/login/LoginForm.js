import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormLabel, FormGroup, FormControl, FormControlLabel } from 'material-ui/Form';

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
      <FormControl>
      <FormGroup>
        {this.state.fail && <h1>Email or Password is incorrect</h1>}
        <TextField
        margin='normal'
        id="email"
        label="Email"
        value={this.state.email}
        onChange={this.handleChange('email')}
        />
        <TextField
        margin='normal'
        id="password"
        label="Password"
        value={this.state.password}
        onChange={this.handleChange('password')}
        />
        </FormGroup>
        <Button
          variant = 'raised'
          color = 'primary'
          onClick={this.handleSubmit}
          disabled={!this.state.email || !this.state.password}
        >
          Login
        </Button>
      </FormControl>
    );
  }
}

export default LoginForm;