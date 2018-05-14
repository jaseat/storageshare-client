import React, { Component } from 'react'
import Chip from 'material-ui/Chip'; //-- convinient to display added items
import TextField from 'material-ui/TextField';
import { InputAdornment } from 'material-ui/Input';
import { FormGroup} from 'material-ui/Form';
import { Button } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
class NewItems extends Component{
  constructor(props){
    super(props);
    this.state={
      itemsArray: [],
      itemName: '',
      itemDescription: ''
    }
  }
  _addItemTextFields = () => {
    let chips = this.state.itemsArray;
    chips.push(
      <Chip label={this.state.itemName} key={this.state.itemName}/>
    );
    this.setState({ itemsArray: chips, itemName: '', itemDescription: '' });
  }
  _addItemName=(e)=>{
    this.setState({itemName: e.target.value})
  }
  _addItemDescription=(e)=>{
    this.setState({itemDescription: e.target.value})
  }
  render(){
    return(
      <div>
      {this.state.itemsArray}
      <FormGroup>
        <TextField
        onChange={this._addItemName}
          InputProps={{
            startAdornment: <InputAdornment position="start">Name</InputAdornment>
          }} />
        <TextField
        onChange={this._addItemDescription}
          InputProps={{
            startAdornment: <InputAdornment position="start">Description</InputAdornment>
          }} />
          <br/><br/>
      </FormGroup>
      <Button variant='fab' color='primary' mini onClick={this._addItemTextFields}><AddIcon/></Button>
      </div>
    )
  }
}
export default NewItems;