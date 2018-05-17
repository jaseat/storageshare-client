import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs, { Tab } from 'material-ui/Tabs';

class Messages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
	}

	componentWillMount() {
		this.props.fetchMessages(this.props.userId);
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};
	render() {
		var { value } = this.state;
		console.log(this.props);
		return (
			<div style={{ width: '100%' }}>
				<p>Messages</p>
			</div>
		);
	}
}

Messages.propTypes = {
	fetchMessages: PropTypes.func,
	messages: PropTypes.array,
};

export default Messages;
