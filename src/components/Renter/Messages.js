import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui/Typography';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StorageShareLight } from '../Theme/StorageShareTheme';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}
	_renderMessage = () => {
		var lendersResponse = 'Waiting for response a response from lender';
		var buttonText = 'Waiting';
		var displayBtn = false;
		if (this.props.message.isAccepted && this.props.message.readByRenter) {
			lendersResponse = `Your package is located at: ${
				this.props.message.Location.address
			}`;
			buttonText = 'Recall Box';
			displayBtn = true;
		} else if (
			this.props.message.isAccepted &&
			!this.props.message.readByRenter
		) {
			lendersResponse = `Congratulation! Property owner of: ${
				this.props.message.Location.address
			} has accepted your offer`;
			displayBtn = true;
			buttonText = 'Confirm';
		} else if (this.props.message.isAccepted === false) {
			lendersResponse = `Sorry! Property owner of: ${
				this.props.message.Location.address
			} has declined your offer`;
			displayBtn = true;
			buttonText = 'Search other storage';
		}

		return (
			<Collapse in={this.state.open} style={styles.collapse}>
				<Grid>
					<p>{lendersResponse}</p>
					{displayBtn && (
						<Button
							variant="raised"
							color="secondary"
							style={{ gridColumnStart: '4' }}
							onClick={this.handleBtnClick}
						>
							{buttonText}
						</Button>
					)}
				</Grid>
			</Collapse>
		);
	};

	handleBtnClick = (event) => {
		console.log(event.target);
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
					<div style={{ justifySelf: 'left', alignSelf: 'center' }}>
						Box - {description}
					</div>
					{!this.props.message.readByRenter ? (
						<Button
							variant="raised"
							color="secondary"
							style={{ gridColumnStart: '4' }}
						>
							New
						</Button>
					) : (
						<Button
							variant="raised"
							color="secondary"
							style={{ gridColumnStart: '4' }}
						>
							Read
						</Button>
					)}

					{this._renderMessage()}
				</Paper>
			</Slide>
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
			<MuiThemeProvider theme={StorageShareLight}>
				<div style={{ width: '100%' }}>
					{messages &&
						messages.map((m, i) => (
							<Message
								key={i}
								description={m.Box.description}
								message={m}
								delay={i * 200}
							/>
						))}
				</div>
			</MuiThemeProvider>
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
