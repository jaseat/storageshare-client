//--imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//-- material-ui components
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { InputAdornment } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormGroup, FormControl, FormControlLabel } from 'material-ui/Form';
//--custom
import NewItem from './NewItem'
const sizesUrl = '/api/sizes';
const newBoxUrl = '/api/box';
class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      sizes: [],
      items: [],
      choosenSizeId: 1,
      weight: 0,
      description: 'Junk',
      fragile: 'false',
      isBoxCreated: false,
      boxId: null
    }
  }
  componentWillMount() {
    fetch(sizesUrl, {
      method: 'GET'
    }).then(result => {
      return result.json();
    }).then(data => {
      let sizesResp = data.map(row => {
        return (
          <MenuItem key={row.id} value={row.id}>
            {row.height + 'x' + row.width + 'x' + row.depth}
          </MenuItem>
        );
      });
      this.setState({ sizes: sizesResp });
    }).catch(error => {
      console.log(error);
    });
  }
  _sizeChange = (e) => {
    this.setState({ choosenSizeId: e.target.value });
  }
  _setWeight = (e) => {
    this.setState({ weight: e.target.value });
  }
  _setDescription = (e) => {
    this.setState({ description: e.target.value });
  }
  _setFragile = (e) => {
    this.setState({ fragile: e.target.value });
  }
  _hanldleSubmit = () => {
    fetch(newBoxUrl, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        SizeId: this.state.choosenSizeId,
        RenterId: this.props.userId,
        weight: this.state.weight,
        description: this.state.description,
        status: 'created',
        fragile: this.state.fragile === 'true' ? true : false
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.setState({isBoxCreated: true, boxId: resp.newBoxId});
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <FormControl>
        <FormGroup>
          <FormLabel component="legend">Size</FormLabel>
          <TextField
            select
            margin='normal'
            value={this.state.choosenSizeId}
            onChange={this._sizeChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">WxLxH</InputAdornment>
            }}>
            {this.state.sizes}
          </TextField>
        </FormGroup>
        <br /><br />
        <FormGroup>
          <FormLabel component="legend">Weight</FormLabel>
          <TextField
            margin='normal'
            required={true}
            InputProps={{
              startAdornment: <InputAdornment position="start">Lb.</InputAdornment>
            }}
            onChange={this._setWeight}
          />
        </FormGroup>
        <br /><br />
        <FormGroup>
          <FormLabel component="legend">Description</FormLabel>
          <TextField
            margin='normal'
            required={true}
            InputProps={{
              startAdornment: <InputAdornment position="start">Kitchen Stuff</InputAdornment>
            }}
            onChange={this._setDescription}
          />
        </FormGroup>
        <br /><br />
        <FormLabel component="legend">Fragile</FormLabel>
        <RadioGroup
          name="fragile"
          row
          value={this.state.fragile}
          onChange={this._setFragile}>
          <FormControlLabel value='true' control={<Radio color="secondary" />} label="Yes" />
          <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
        </RadioGroup>
        <Button variant='raised' color='primary' onClick={this._hanldleSubmit}>Create</Button>
        {this.state.isBoxCreated ? <NewItem boxId = {this.state.boxId}/> : null}
      </FormControl>
    );
  }
}
NewBoxForm.propTypes = {
  userId: PropTypes.isRequired
}
export default NewBoxForm;