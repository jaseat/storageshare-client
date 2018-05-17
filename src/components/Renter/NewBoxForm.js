//--imports
import React, { Component } from "react";
//-- material-ui components
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { InputAdornment } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Radio, { RadioGroup } from "material-ui/Radio";
import { FormControlLabel } from "material-ui/Form";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { StorageShareLight } from "../Theme/StorageShareTheme";
import Divider from "material-ui/Divider";
//--custom
import NewItem from "./NewItem";
const sizesUrl = "/api/sizes";
const newBoxUrl = "/api/box";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      sizes: [],
      items: [],
      choosenSizeId: 1,
      weight: 0,
      description: "Junk",
      fragile: "false",
      boxId: null
    };
  }
  componentWillMount() {
    fetch(sizesUrl, {
      method: "GET"
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        let sizesResp = data.map(row => {
          return (
            <MenuItem key={row.id} value={row.id}>
              {row.height + "x" + row.width + "x" + row.depth}
            </MenuItem>
          );
        });
        this.setState({ sizes: sizesResp });
      })
      .catch(error => {
        console.log(error);
      });
  }
  _sizeChange = e => {
    this.setState({ choosenSizeId: e.target.value });
  };
  _setWeight = e => {
    this.setState({ weight: e.target.value });
  };
  _setDescription = e => {
    this.setState({ description: e.target.value });
  };
  _setFragile = e => {
    this.setState({ fragile: e.target.value });
  };
  _hanldleSubmit = () => {
    fetch(newBoxUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      credentials: "same-origin",
      body: JSON.stringify({
        SizeId: this.state.choosenSizeId,
        RenterId: this.props.userId,
        weight: this.state.weight,
        description: this.state.description,
        status: "created",
        fragile: this.state.fragile === "true" ? true : false
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.props.boxId(resp.newBoxId);
        this.props.nextSlide();
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={6}>
            <Typography variant="title">Size</Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              value={this.state.choosenSizeId}
              onChange={this._sizeChange}
              label="WxLxH"
            >
              {this.state.sizes}
            </TextField>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={6}>
            <Typography variant="title">Weight</Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <TextField label="lb." fullWidth onChange={this._setWeight} />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={6}>
            <Typography variant="title">Description</Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <TextField label="etc." fullWidth onChange={this._setDescription} />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="flex-end">
          <Grid item xs={6}>
            <Typography variant="title">Fragile</Typography>
            <Divider />
          </Grid>
          <Grid
            item
            xs={6}
            style={{ borderBottom: "1px solid rgba(255,255,255,0.7)" }}
          >
            <RadioGroup
              name="fragile"
              row
              value={this.state.fragile}
              onChange={this._setFragile}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="secondary" />}
                label="Yes"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-end">
          <Button
            style={{ marginTop: 20 }}
            variant="raised"
            color="secondary"
            onClick={this._hanldleSubmit}
          >
            Create
          </Button>
        </Grid>
      </div>
    );
  }
}

export default NewBoxForm;
