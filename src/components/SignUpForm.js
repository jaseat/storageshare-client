//--imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//-- material-ui components
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MaskedInput from 'react-text-mask';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
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
      paypal: '',
      phone: '(   )    -    ',
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
    this.setState({ phone: e.target.value});
  };

  _hanldleSubmit = () => {
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
      })
      .catch((error) => {
      	console.log(error);
      });
  };
  render() {
    return (
      <FormControl>
        <TextField
          required={true}
          id="nameId"
          label="full name"
          value={this.state.name}
          onChange={this._handleChange("name")}
        />
        <TextField
          required={true}
          id="emailId"
          label="email"
          value={this.state.email}
          onChange={this._handleChange("email")}
        />
        <TextField
          required={true}
          id="passwordId"
          label="password"
          value={this.state.password}
          onChange={this._handleChange("password")}
        />
        <TextField
          required={true}
          id="phoneId"
          label="phone number"
          value={this.state.phone}
          onChange={this._phoneChange}
          inputComponent={TextMaskCustom}
        />
        <TextField
          required={true}
          id="address"
          label="address"
          value={this.state.addressId}
          onChange={this._handleChange("address")}
        />
        <TextField
          id="paypal"
          label="paypal email"
          value={this.state.paypaylId}
          onChange={this._handleChange("paypal")}
        />
        <Button
          variant="raised"
          color="primary"
          onClick={this._hanldleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    );
  }
}

SignUpForm.propTypes = {
  login: PropTypes.func,
}

export default SignUpForm;