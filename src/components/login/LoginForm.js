import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SignUpForm from '../../containers/SignUpForm'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fail: false,
      isSignUp: false,
      isLender: false
    };
  }
  ischecked = () => {
    this.setState({ isLender: !this.state.isLender });
  }

  _showRegisterDialog = () => {
    this.setState({ isSignUp: true });
  }
  _hideRegisterDialog = () => {
    this.setState({ isSignUp: false });
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    var res = await fetch('/login', {
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'same-origin',
    });
    if (res.status === 401) {
      this.setState({ fail: true });
    }
    else if (res.status === 200) {
      var data = await res.json();
      this.props.login(data.id);
    }
  }

  handleSubmitLender = async e => {
    e.preventDefault();
    var res = await fetch('/lenders/login', {
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'same-origin',
    });
    if (res.status === 401) {
      this.setState({ fail: true });
    }
    else if (res.status === 200) {
      var data = await res.json();
      console.log(data)
      this.props.login(data.id);
    }
  }

  render() {
    return (
      <form style={{ maxWidth: 250 }}>
        {this.state.fail &&
          <Typography variant='subheading' color='error'>
            Email or Password is incorrect
        </Typography>}
        <TextField
          fullWidth
          id="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange('email')}
        />
        <TextField
          fullWidth
          margin = 'dense'
          type = 'password'
          id="password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.isLender}
              onChange={this.ischecked}
              value="checkedB"
              color="primary"
            />
          }
          label="I'm Lender"
        />  

        <br/><br/>
        <Grid container direction='row' justify='space-between'>
        <Button
          variant='flat'
          onClick={this._showRegisterDialog}
        >
          Sign Up
          </Button>
        <Button
          variant='raised'
          color='secondary'
          onClick={this.state.isLender ? this.handleSubmitLender : this.handleSubmit}
          disabled={!this.state.email || !this.state.password}
        >
          Go
        </Button>
        </Grid>
        <SignUpForm open={this.state.isSignUp} handleCloseDialog={this._hideRegisterDialog} />
      </form>
    );
  }
}

export default LoginForm;