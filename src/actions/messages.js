import { MessagesTypes as types } from '../action-types';

const updateMessagesObject = (messages, type) => {
	return {
		type,
		messages,
	};
};

export function fetchMessages(id /*will add param to make it work for renter/lender*/) {
	return async (dispatch) => {
		console.log('making a call for messages');
		var messages = await fetch('/messages/renter/' + id, {
			credentials: 'same-origin',
		});
		messages = await messages.json();
		console.log(messages);
		dispatch(updateMessagesObject(messages, types.FETCH_MESSAGES));
	};
}
