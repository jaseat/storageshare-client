//--imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//-- material-ui components
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import MaskedInput from 'react-text-mask';
import { FormLabel, FormGroup, FormControl, FormControlLabel } from 'material-ui/Form';
//--custom
const newRenterUrl = '/index/newrenter'

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


class NewRenterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: 50,
			openDialog: false,
			nameId: '',
			emailId: '',
			paypalId: '',
            phoneId: '',
            addressId: '',
            isRetnerCreated: false,
		};
	}
    //input field watchers
	_nameChange = (e) => {
		this.setState({ nameId: e.target.value });
	};
	_emailChange = (e) => {
		this.setState({ emailId: e.target.value });
	};
	_paypalChange = (e) => {
		this.setState({ paypalId: e.target.value });
	};
	_phoneChange = (e) => {
        //tests for number before changing form data
        const re = /^[0-9\b]+$/;
        const numOfDigits = e.target.value.length;
        const phoneCharsMax = 10;
        if (e.target.value == '' || re.test(e.target.value) && numOfDigits < phoneCharsMax) {
        this.setState({ phoneId: e.target.value});
        }
	};
	_addressChange = (e) => {
		this.setState({ addressId: e.target.value });
    };
    
	_hanldleSubmit = () => {
		fetch(newRenterUrl, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				// insert submit new renter data
				name: this.state.nameId,
				email: this.state.emailId,
				paypal: this.state.paypalId,
				phone: this.state.phoneId,
				address: this.state.addressId,
			}),
		})
			.then((resp) => {
				this.setState({ isRenterCreated: true });
				console.log(resp);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		return (
			<FormControl>
				<FormGroup>
					<TextField required={true} id="nameId" label="full name" value={this.state.nameId} onChange={this._nameChange} />
				</FormGroup>
				<br />
				<br />
				<FormGroup>
                    <TextField required={true} id="emailId" label="email" value={this.state.emailId} onChange={this._emailChange} />
				</FormGroup>
				<br />
				<br />
				<FormGroup>
                    <TextField required={true} id="phoneId" label="phone number" value={this.state.phoneId} onChange={this._phoneChange} inputComponent={TextMaskCustom} />
				</FormGroup>
				<br />
				<br />
				<FormGroup>
                    <TextField required={true} id="addressId" label="address" value={this.state.addressId} onChange={this._addressChange} />
				</FormGroup>
				<br />
				<br />
				<FormGroup>
					<TextField id="paypalId" label="paypal email" value={this.state.paypaylId} onChange={this._paypalChange} />
				</FormGroup>
				<br />
				<br />
				<Button variant="raised" color="primary" onClick={this._hanldleSubmit}>
					Submit
				</Button>
			</FormControl>
		);
	}
}

NewRenterForm.propTypes = {
    userId: PropTypes.number.isRequired,
}

export default NewRenterForm;