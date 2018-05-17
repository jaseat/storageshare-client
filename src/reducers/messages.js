import { MessagesTypes as types } from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
	messages: null,
};

export default function(state: STATE = initialState, action: ACTION) {
	switch (action.type) {
		case types.FETCH_MESSAGES:
			return objectAssign({}, state, { messages: action.messages });

		default:
			return state;
	}
}
