import {
  connect,
} from 'react-redux';
import StatisticsList from 'components/StatisticsList';

export function mapStateToProps(state) {
  return {
    statistics: state.statistics.data,
  };
}

export default connect(mapStateToProps)(StatisticsList);
