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
            name: null,
            email: null,
            paypal_id: null,
            phone: null,
            address: null,
            isRetnerCreated: false
        }
    }
    
    _nameChange = (e) => {
        this.setState({ nameId: e.target.value });
    }
    _hanldleSubmit = () => {
        fetch(newRenterUrl, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                // insert submit new renter data
            })
        }).then(resp => {
            this.setState({ isRenterCreated: true });
            console.log(resp);
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <FormControl>
                <FormGroup>
                    <FormLabel component="legend">name</FormLabel>
                    <TextField
                        id="name"
                        label="name"
                        value={this.state.nameId}
                        onChange={this._nameChange}
                    />
                </FormGroup>
                <br /><br />
                <FormLabel component="legend">Fragile</FormLabel>
                <Button variant='raised' color='primary' onClick={this._hanldleSubmit}>Create</Button>
                {this.state.isRenterCreated ? <NewItem isRenterCreated={this.state.isRenterCreated} /> : null}
            </FormControl>
        );
    }
}
NewRenterForm.propTypes = {
    userId: PropTypes.number.isRequired
}
export default NewRenterForm;