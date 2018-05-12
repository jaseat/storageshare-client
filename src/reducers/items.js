import {ItemsTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  items: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.FETCH_ITEMS:
      return objectAssign({}, state, {items: action.items});

    default:
      return state;
  }
}
