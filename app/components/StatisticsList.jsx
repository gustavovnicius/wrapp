import React from 'react';

function StatisticsList({ statistics }) {
  return (
    <div>
      <ul>
        {
          statistics.map((statistic, index) => (
            <li key={index}>
              <p>Name: {statistic.name}</p>
              <p>Balance: {statistic.balance}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

StatisticsList.propTypes = {
  statistics: React.PropTypes.array.isRequired,
};

export default StatisticsList;
