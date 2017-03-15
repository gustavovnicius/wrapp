import React from 'react';
import {
  Container,
} from 'rebass';
import Statistic from 'components/Statistic';

function StatisticsList({ statistics }) {
  return (
    <Container>
      {
        statistics.map((statistic, index) => (
          <Statistic key={index} {...statistic} />
        ))
      }
    </Container>
  );
}

StatisticsList.propTypes = {
  statistics: React.PropTypes.array.isRequired,
};

export default StatisticsList;
