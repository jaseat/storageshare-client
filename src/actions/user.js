import {UserTypes as types} from '../action-types';
import { history } from '../store';

const updateUserObject = ( data, type ) => {
  return {
    data,
    type,
  };
};

export function login(id) {
  return dispatch => {
    history.push('/r/' + id);
    dispatch(updateUserObject(id, types.LOG_IN));
  };
}