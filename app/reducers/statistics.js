import _ from 'lodash';
import {
  ADD_STATISTIC,
} from 'actions/statistics';

const initialState = {
  statistics: [],
};

export default function statistics(state = initialState, action) {
  switch (action.type) {
    case ADD_STATISTIC:
      return {
        ...state,
        statistics: _.concat(state.statistics, [action.payload])
      }
    default:
      return state;
  }
}
