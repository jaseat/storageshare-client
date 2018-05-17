import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Messages extends Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [],
		};
	}

	componentWillMount() {
		this.props.fetchMessages(this.props.userId);
		
	}

	render() {
		console.log('render', this.state.messages);
		return (
			<div style={{ width: '100%' }}>
				{/* {this.state.messages.forEach((e, i) => {
					return <p>{e.message}</p>;
				})} */}
			</div>
		);
	}
}

Messages.propTypes = {
	fetchMessages: PropTypes.func,
	messages: PropTypes.array,
};

export default Messages;
