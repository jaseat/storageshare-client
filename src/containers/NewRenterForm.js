//--imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//-- material-ui components
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import { FormLabel, FormGroup, FormControl, FormControlLabel } from 'material-ui/Form';
//--custom
const newRenterUrl = 'users/api/newrenter'

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
		this.setState({ phoneId: e.target.value });
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
					<TextField id="nameId" label="full name" value={this.state.nameId} onChange={this._nameChange} />
				</FormGroup>
				<br />
				<br />
				<FormGroup>
					<TextField id="emailId" label="email" value={this.state.emailId} onChange={this._nameChange} />
				</FormGroup>
				<br />
				<br />
				<FormGroup>
					<TextField id="phoneId" label="phone number" value={this.state.phoneId} onChange={this._nameChange} />
				</FormGroup>
				<br />
				<br />
				<FormGroup>
					<TextField id="addressId" label="address" value={this.state.addressId} onChange={this._nameChange} />
				</FormGroup>
				<br />
				<br />
				<FormGroup>
					<TextField id="paypalId" label="paypal email" value={this.state.paypaylId} onChange={this._nameChange} />
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
    userId: PropTypes.number.isRequired
}
export default NewRenterForm;