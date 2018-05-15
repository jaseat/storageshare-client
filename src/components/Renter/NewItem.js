import React, { Component } from 'react'
import Chip from 'material-ui/Chip'; //-- convinient to display added items
import TextField from 'material-ui/TextField';
import { InputAdornment } from 'material-ui/Input';
import { FormGroup } from 'material-ui/Form';
import { Button } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';

class NewItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: [],
      itemName: '',
      itemDescription: ''
    }
  }
  _renderChips = () => {
    let chips = [];
    this.state.itemsArray.map((item) => {
      chips.push(<Chip key={item.name} label={item.name} onDelete={this._deleteItem} datarm={item} />);
    });
    return chips;
  }

  _addItem = () => {
    let items = this.state.itemsArray;
    items.push(
      {
        name: this.state.itemName,
        description: this.state.itemDescription
      }
    );
    this.setState({ itemsArray: items, itemName: '', itemDescription: '' });
  }

  _handleTextFieldInput = name => e => {
    this.setState({
      [name]: e.target.value
    });
  }

  _deleteItem = (e) => {
    var items = this.state.itemsArray;
    var indexOfItem = items.indexOf(e.target.datarm);
    items.splice(indexOfItem, 1);
    this.setState({ itemsArray: items });
  }

  render() {
    return (
      <div>
        {this._renderChips()}
        <FormGroup>
          <TextField
            onChange={this._handleTextFieldInput('itemName')}
            value={this.state.itemName}
            InputProps={{
              startAdornment: <InputAdornment position="start">Name</InputAdornment>
            }} />
          <TextField
            onChange={this._handleTextFieldInput('itemDescription')}
            value={this.state.itemDescription}
            InputProps={{
              startAdornment: <InputAdornment position="start">Description</InputAdornment>
            }} />
          <br />
        </FormGroup>
        <Button variant='fab' color='primary' mini onClick={this._addItem}><AddIcon /></Button>
      </div>
    )
  }
}
export default NewItems;