import React, { Component } from "react";
import Grid from "material-ui/Grid";
import Divider from "material-ui/Divider";
import Typography from "material-ui/Typography";
import Chip from "material-ui/Chip"; //-- convinient to display added items
import TextField from "material-ui/TextField";
import { Button } from "material-ui";

class NewItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: [],
      itemName: "",
      itemDescription: ""
    };
  }
  _renderChips = () => {
    let chips = [];
    this.state.itemsArray.map(item => {
      chips.push(
        <Chip
          style={{ marginLeft: 10 }}
          key={item.name}
          label={item.name}
          onDelete={this._deleteItem(item)}
        />
      );
    });
    return chips;
  };

  _addItem = () => {
    let items = this.state.itemsArray;
    items.push({
      name: this.state.itemName,
      description: this.state.itemDescription,
      BoxId: this.props.boxId
    });
    this.setState({ itemsArray: items, itemName: "", itemDescription: "" });
  };

  _handleTextFieldInput = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  _deleteItem = item => {
    return () => {
      var items = this.state.itemsArray;
      var indexOfItem = items.indexOf(item);
      items.splice(indexOfItem, 1);
      this.setState({ itemsArray: items });
    }
  };

  _handleAddItems = () => {
    fetch("/api/newitems", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      credentials: "same-origin",
      body: JSON.stringify({ items: this.state.itemsArray })
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.props.nextSlide();
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Typography variant="title">
          Current items: {this._renderChips()}
        </Typography>

        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={6}>
            <Typography variant="title">Item Name</Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={this._handleTextFieldInput("itemName")}
              value={this.state.itemName}
              fullWidth
              label="etc: Cup"
            />
          </Grid>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={6}>
            <Typography variant="title">Description</Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="etc. my favorite red mug"
              onChange={this._handleTextFieldInput("itemDescription")}
              value={this.state.itemDescription}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-end"
          style={{ marginTop: 20 }}
        >
          <Button variant="raised" color="primary" onClick={this._addItem}>
            Add
          </Button>
          <Button
            style={{ marginLeft: 20 }}
            variant="raised"
            color="secondary"
            onClick={this._handleAddItems}
          >
            Done
          </Button>
        </Grid>
      </div>
    );
  }
}
export default NewItems;
