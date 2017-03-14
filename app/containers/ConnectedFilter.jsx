import {
  connect,
} from 'react-redux';
import {
  applyFilter,
} from 'actions/filter';
import Filter from 'components/Filter';

export function mapStateToProps(state) {
  return {
    enabled: state.filter.enabled,
    selected: state.filter.selected,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    applyFilter: filter => dispatch(applyFilter(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
