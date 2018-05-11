import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  _renderItems = () => {
    return (
      <Collapse in={this.state.open} style={styles.collapse}>
          <List>
            {this.props.items.map(i => (
              <ListItem >
                {i.name}
              </ListItem>
            ))}
          </List>
      </Collapse>
  )}

  handleClick = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    var { name } = this.props;
    return (
      <div>
        <Paper style={styles.boxes}>
          <div onClick={this.handleClick} style={styles.icon}>
            { this.state.open ? 
              <ExpandMore  /> : 
              <ChevronRight />}
            </div>
          <div style={{justifySelf: "center", alignSelf: "center"}}>
            {name}
          </div>
          <Button style={{gridColumnStart: "4"}}>
            Recall
          </Button>
        {this._renderItems() }                  
        </Paper>
      </div>
    );
  }
}

class Boxes extends Component {

  render() {
    var { boxes } = this.props;
    return (
      <div>
        {boxes.map(b => (
          <Box name={b.name} items={b.items} />
        ))}
      </div>
    );
  }
}

Boxes.propTypes = {
  boxes: PropTypes.array,
}

var styles = {
  boxes: {
    display: "grid",
    width: "80%",
    margin: "auto",
    marginTop: "5%",
    gridTemplateColumns: "[first] 5% 25% auto 15% [end]",
    gridTemplateRows: "1fr auto",
    padding: "15px",
  },
  collapse: {
    gridRowStart: "2",
    gridColumn: "first / end"
  },
  icon: {
    alignSelf: "center",
    cursor: "pointer",
  }
}

export default Boxes;