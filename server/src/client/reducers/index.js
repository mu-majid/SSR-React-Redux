import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import currentUserReducer from './current-user';
import adminsReducer from './admins-reducer';


export default combineReducers({
  users: usersReducer,
  authenticated: currentUserReducer,
  admins: adminsReducer,
});