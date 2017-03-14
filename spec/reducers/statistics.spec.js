import statistics from 'reducers/statistics';

describe('statistics reducer', () => {
  const initialState = {
    data: [],
  };

  it('define an empty statistics list by default', () => {
    const dummyAction = { type: 'DUMMY' };

    expect(statistics(undefined, dummyAction)).toEqual(initialState);
  });

  it('accepts an ADD_STATISTIC action', () => {
    const addStatisticAction = {
      type: 'ADD_STATISTIC',
      payload: {
        name: 'A name',
        balance: 1000,
      },
    };
    const expected = {
      data: [{
        name: 'A name',
        balance: 1000,
      }],
    };

    expect(statistics(initialState, addStatisticAction)).toEqual(expected);
  });
});
