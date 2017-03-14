import { combineReducers } from 'redux';
import filter from 'reducers/filter';
import statistics from 'reducers/statistics';

export default combineReducers({
  filter,
  statistics,
});
