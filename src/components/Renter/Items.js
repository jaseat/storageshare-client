import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs, {Tab} from 'material-ui/Tabs';

import Boxes from './Boxes';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentWillMount() {
    this.props.fetchItems(this.props.userId);
  }

  handleChange = (event, value) => {
    this.setState({value});
  }
  render() {
    var { value } = this.state;
    return (
      <div>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Boxes" />
          <Tab label="Items" />
        </Tabs>
        {(value === 0 && this.props.items) && <Boxes boxes={this.props.items} />}
      </div>
    );
  }
}

Items.propTypes = {
  fetchItems: PropTypes.func,
  items: PropTypes.array,
}

export default Items;