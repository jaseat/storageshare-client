//--imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//-- material-ui components
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MaskedInput from 'react-text-mask';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
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
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        paypal: '',
        phone: '',
        address: '',
      },
      openDialog: false,
      isRetnerCreated: false,
      isSubmitDisabled: true,
    };
  }
  //input field watchers
  _handleChange = name => e => {
    const formDataNew = Object.assign({}, this.state.formData, { [name]: e.target.value });
    const check = this._checkIfAllFields();

    if (check) {
      this.setState({ formData: formDataNew, isSubmitDisabled: false })
    } else {
      this.setState({ formData: formDataNew });
    }
  }
  _checkIfAllFields = () => {
    for (var key in this.state.formData) {
      if (!this.state.formData[key]) {
        return false;
      }
    }
    return true;
  }

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
          name: this.state.formData.firstName + ' ' + this.state.formData.lastName,
          email: this.state.formData.email,
          password: this.state.formData.password,
          paypal: this.state.formData.paypal,
          phone: this.state.formData.phone,
          address: this.state.formData.address,
        }),
      })
        .then(res => res.json())
        .then((res) => {
          this.props.login(res.newRenterId);
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
              <AccountBox color="primary" />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                required={true}
                id="nameId"
                label="First Name"
                value={this.state.formData.firstName}
                onChange={this._handleChange("firstName")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required={true}
                id="lastNameId"
                label="Last name"
                value={this.state.lastName}
                onChange={this._handleChange("lastName")}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item xs={1}>
              <Email color="primary" />
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
              <Lock color="primary" />
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
              <Home color="primary" />
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
              <Phone color="primary" />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                required={true}
                id="phoneId"
                label="Phone number"
                value={this.state.formData.phone}
                onChange={this._handleChange('phone')}
                InputProps={{
                  inputComponent: TextMaskCustom
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <AccountBalanceWallet color="primary" />
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
            variant='flat'
            onClick={this.props.handleCloseDialog}
          >
            Cancel
          </Button>
          <Button
            disabled={this.state.isSubmitDisabled}
            variant="raised"
            color="secondary"
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