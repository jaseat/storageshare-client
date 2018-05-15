//--imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//-- material-ui components
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MaskedInput from 'react-text-mask';
import Input, { InputLabel } from 'material-ui/Input';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import { Typography } from 'material-ui';
import { AccountBox, Email, Lock, Home, Phone, AccountBalanceWallet } from '@material-ui/icons';
import Grid from 'material-ui/Grid'

//--custom
const newRenterUrl = '/newrenter'

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 50,
      openDialog: false,
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      paypal: '',
      phone: '',
      address: '',
      isRetnerCreated: false,
    };
  }
  //input field watchers
  _handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  }

  _phoneChange = (e) => {
  //tests for number before changing form data
    const re = /^[0-9\b]+$/;
    const numOfDigits = e.target.value.length;
    const phoneCharsMax = 11;
    if (e.target.value === '' || (re.test(e.target.value) && numOfDigits < phoneCharsMax)) {
      this.setState({ phone: e.target.value});
    }
  };

  _hanldleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.passwordConfirm) {
      fetch(newRenterUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          // insert submit new renter data
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          paypal: this.state.paypal,
          phone: this.state.phone,
          address: this.state.address,
        }),
      })
        .then(res => res.json())
        .then((res) => {
          this.props.login(res.newUserId);
          this.props.handleCloseDialog;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //show error
    }
  };
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-signup-title">SignUp</DialogTitle>
        <DialogContent>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={1}>
              <AccountBox />
            </Grid>
            <Grid item xs={11}>
              <TextField
                fullWidth
                required={true}
                id="nameId"
                label="Full name"
                value={this.state.name}
                onChange={this._handleChange("name")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={1}>
              <Email />
            </Grid>
            <Grid item xs={11}>
              <TextField
                fullWidth
                required={true}
                id="emailId"
                label="Email"
                value={this.state.email}
                onChange={this._handleChange("email")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={1}>
              <Lock />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                required={true}
                id="passwordId"
                label="Password"
                type='password'
                value={this.state.password}
                onChange={this._handleChange("password")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required={true}
                id="passwordConfirm"
                label="Confirm password"
                type='password'
                value={this.state.passwordConfirm}
                onChange={this._handleChange("passwordConfirm")}
              />
            </Grid>
          </Grid>
          <br />
          <Typography variant='subheading' color='primary'>
            Personal Info
          </Typography>
          <br />
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={1}>
              <Home />
            </Grid>
            <Grid item xs={11}>
              <TextField
                fullWidth
                required={true}
                id="address"
                label="Address"
                value={this.state.addressId}
                onChange={this._handleChange("address")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={1}>
              <Phone />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                required={true}
                id="phoneId"
                label="Phone number"
                value={this.state.phone}
                onChange={this._phoneChange}
                inputComponent={TextMaskCustom}
              />
            </Grid>
            <Grid item xs={1}>
              <AccountBalanceWallet />
            </Grid>
            <Grid item xs={5}>
              <TextField
              fullWidth
                id="paypal"
                label="Paypal email"
                value={this.state.paypaylId}
                onChange={this._handleChange("paypal")}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant='raised'
            color='secondary'
            onClick={this.props.handleCloseDialog}
          >
            Cancel
          </Button>
          <Button
            variant="raised"
            color="primary"
            onClick={this._hanldleSubmit}
          >
            Submit
        </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

SignUpForm.propTypes = {
  login: PropTypes.func,
}

export default SignUpForm;