import { combineReducers } from 'redux';
import Tasks from './TasksReducer';
import CheckItems from './CheckItemsReducer';

export default combineReducers({
  Tasks,
  CheckItems
});