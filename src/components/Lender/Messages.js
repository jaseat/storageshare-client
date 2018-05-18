import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}
	_renderItems = () => {
		var lendersResponse = 'Waiting for response a response from lender';
		if (this.props.message.isAccepted && this.props.message.readByRenter)
			lendersResponse = `Your package is located at: ${
				this.props.message.Location.address
			}`;
		else if (this.props.message.isAccepted && !this.props.message.readByRenter)
			lendersResponse = `Congratulation! Property owner of: ${
				this.props.message.Location.address
			} has accepted your offer`;
		else if (this.props.message.isAccepted === false)
			lendersResponse = `Sorry! Property owner of: ${
				this.props.message.Location.address
			} has declined your offer`;

		return (
			<Collapse in={this.state.open} style={styles.collapse}>
				<p>{lendersResponse}</p>
			</Collapse>
		);
	};

	handleClick = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		var { description } = this.props;
		return (
			<div>
				<Paper style={styles.boxes}>
					<div onClick={this.handleClick} style={styles.icon}>
						{this.state.open ? <ExpandMore /> : <ChevronRight />}
					</div>
					<div style={{ justifySelf: 'left', alignSelf: 'center' }}>
						Box - {description}
					</div>
					{!this.props.message.readByRenter ? (
						<Button style={{ gridColumnStart: '4' }}>New</Button>
					) : (
						<Button style={{ gridColumnStart: '4' }}>Read</Button>
					)}

					{this._renderItems()}
				</Paper>
			</div>
		);
	}
}

class Messages extends Component {
	componentWillMount() {
		this.props.fetchMessages(this.props.userId);
	}

	render() {
		var { messages } = this.props;
		return (
			<div style={{ width: '100%' }}>
				{messages &&
					messages.map((m, i) => (
						<Message key={i} description={m.Box.description} message={m} />
					))}
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
