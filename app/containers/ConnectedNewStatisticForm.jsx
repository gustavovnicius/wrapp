import {
  connect,
} from 'react-redux';
import {
  addStatistic,
} from 'actions/statistics';
import NewStatisticForm from 'components/NewStatisticForm';

export function mapStateToProps() {
  return {};
}

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (name, balance) => dispatch(addStatistic(name, balance)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStatisticForm);
