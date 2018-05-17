import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import List, { ListItem } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import Slide from "material-ui/transitions/Slide";
import Typography from "material-ui/Typography";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { StorageShareLight } from "../Theme/StorageShareTheme";
import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRight from "@material-ui/icons/ChevronRight";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  _renderItems = () => {
    return (
      <Collapse in={this.state.open} style={styles.collapse}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
          style={{ marginBottom: 20, marginTop: 12 }}
        >
          <Grid item xs={6}>
            <Typography variant="subheading">Name</Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subheading">Description</Typography>
            <Divider />
          </Grid>
        </Grid>

        {this.props.items.map((i, idx) => (
          <div key={idx} style={{ marginBottom: 20 }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-end"
            >
              <Grid item xs={6}>
                <Typography variant="body1">{i.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{i.description}</Typography>
              </Grid>
            </Grid>
            <Divider light />
          </div>
        ))}
      </Collapse>
    );
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    var { description } = this.props;
    return (
      <Slide
        direction="up"
        in={true}
        style={{ transitionDelay: this.props.delay }}
        mountOnEnter
        unmountOnExit
      >
        <Paper style={styles.boxes}>
          <div onClick={this.handleClick} style={styles.icon}>
            {this.state.open ? <ExpandMore /> : <ChevronRight />}
          </div>
          <div style={{ justifySelf: "center", alignSelf: "center" }}>
            <Typography variant="title">{description}</Typography>
          </div>
          <Button
            variant="raised"
            color="secondary"
            style={{ gridColumnStart: "4" }}
          >
            Recall
          </Button>
          {this._renderItems()}
        </Paper>
      </Slide>
    );
  }
}

class Boxes extends Component {
  render() {
    var { boxes } = this.props;
    return (
      <MuiThemeProvider theme={StorageShareLight}>
        {boxes.map((b, i) => (
          <Box
            key={i}
            description={b.description}
            items={b.Items}
            delay={i * 200}
          />
        ))}
      </MuiThemeProvider>
    );
  }
}

Boxes.propTypes = {
  boxes: PropTypes.array
};

var styles = {
  boxes: {
    display: "grid",
    width: "90%",
    margin: "auto",
    marginTop: "5%",
    gridTemplateColumns: "[first] 5% 25% auto 15% [end]",
    gridTemplateRows: "1fr auto",
    padding: "15px"
  },
  collapse: {
    gridRowStart: "2",
    gridColumn: "first / end"
  },
  icon: {
    alignSelf: "center",
    cursor: "pointer"
  }
};

export default Boxes;
