import React from 'react';
import renderer from 'react-test-renderer';
import Statistic from 'components/Statistic';

describe('Statistic', () => {
  it('match the snapshot', () => {
    const statistic = renderer.create(
      <Statistic name={'A name'} balance={1000} />,
    ).toJSON();

    expect(statistic).toMatchSnapshot();
  });
});
