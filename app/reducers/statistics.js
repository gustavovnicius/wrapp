import _ from 'lodash';
import {
  ADD_STATISTIC,
} from 'actions/statistics';

const initialState = {
  data: [],
};

export default function statistics(state = initialState, action) {
  switch (action.type) {
    case ADD_STATISTIC:
      return {
        ...state,
        data: _.concat(state.data, [action.payload])
      }
    default:
      return state;
  }
}
