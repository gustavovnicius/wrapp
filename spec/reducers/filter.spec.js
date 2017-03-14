import filter from 'reducers/filter';

describe('filter reducer', () => {
  const initialState = {
    enabled: [],
    selected: {},
  };

  it('define an empty statistics list by default', () => {
    const dummyAction = { type: 'DUMMY' };
    const expected = {
      enabled: expect.any(Array),
      selected: {
        label: 'All',
        filter: expect.any(Function),
      },
    };

    expect(filter(undefined, dummyAction)).toEqual(expected);
  });

  it('accepts an APPLY_FILTER action', () => {
    const applyFilterAction = {
      type: 'APPLY_FILTER',
      payload: {
        filter: {
          label: 'Positive',
          filter: jest.fn(),
        },
      },
    };
    const expected = {
      enabled: [],
      selected: {
        label: 'Positive',
        filter: expect.any(Function),
      },
    };

    expect(filter(initialState, applyFilterAction)).toEqual(expected);
  });
});
