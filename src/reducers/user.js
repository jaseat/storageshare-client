import {UserTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  id: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.LOG_IN:
      return objectAssign({}, state, {id: action.data});

    default:
      return state;
  }
}