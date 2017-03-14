import {
  APPLY_FILTER,
} from 'actions/filter';
import {
  defaultFilter,
  enabledFilters,
} from 'plugins/filter';

const initialState = {
  enabled: enabledFilters(),
  selected: defaultFilter(),
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case APPLY_FILTER:
      return {
        ...state,
        selected: action.payload.filter,
      };
    default:
      return state;
  }
}
