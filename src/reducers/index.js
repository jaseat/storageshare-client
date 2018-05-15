import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import items from './items';
import user from './user';

export default combineReducers({
  routing: routerReducer,
  items,
  user,
});