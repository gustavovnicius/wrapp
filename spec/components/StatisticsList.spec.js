import React from 'react';
import renderer from 'react-test-renderer';
import StatisticsList from 'components/StatisticsList';

describe('StatisticsList', () => {
  const statisticsData = [
    {
      name: 'A name',
      balance: 1000,
    },
    {
      name: 'Another name',
      balance: 2000,
    },
  ];

  it('match the snapshot', () => {
    const statisticsList = renderer.create(
      <StatisticsList statistics={statisticsData} />,
    ).toJSON();

    expect(statisticsList).toMatchSnapshot();
  });
});
