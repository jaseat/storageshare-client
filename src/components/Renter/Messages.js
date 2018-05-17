import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';

class Messages extends Component {
	componentWillMount() {
		this.props.fetchMessages(this.props.userId);
	}

	render() {
		console.log('render', this.props.messages);
		return (
			<div style={{ width: '100%' }}>
				{this.props.messages &&
					this.props.messages.map((e, i) => {
						return (
							<Paper style={styles.boxes}>
								<div onClick={this.handleClick} style={styles.icon}>
								</div>
								<div style={{ justifySelf: 'center', alignSelf: 'center' }}>
									{e.message}
								</div>
								<Button></Button>
								<Button style={{ gridColumnStart: '4' }}>Mark as read</Button>
							</Paper>
						);
					})}
			</div>
		);
	}
}

Messages.propTypes = {
	fetchMessages: PropTypes.func,
	messages: PropTypes.array,
};

var styles = {
	boxes: {
		display: 'grid',
		width: '90%',
		margin: 'auto',
		marginTop: '5%',
		gridTemplateColumns: '[first] 5% 25% auto 15% [end]',
		gridTemplateRows: '1fr auto',
		padding: '15px',
	},
	collapse: {
		gridRowStart: '2',
		gridColumn: 'first / end',
	},
	icon: {
		alignSelf: 'center',
		cursor: 'pointer',
	},
};

export default Messages;
