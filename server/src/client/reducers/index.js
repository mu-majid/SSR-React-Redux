import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import currentUserReducer from './current-user';


export default combineReducers({
  users: usersReducer,
  authenticated: currentUserReducer
});