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

export function getUser() {
  return async dispatch => {
    var res = await fetch('/api/userid', {
      credentials: 'same-origin'
    })
    if(res.status === 200){
      var {userid} = await res.json();
      history.push('/r/' + userid);
      dispatch(updateUserObject(userid, types.GET_USER));
    }
  }
}