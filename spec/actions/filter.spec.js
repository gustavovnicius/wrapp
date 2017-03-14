import * as filterActions from 'actions/filter';

describe('Filter actions', () => {
  describe('applyFilter', () => {
    it('should return an applyFilter action', () => {
      const filter = {
        label: 'All',
        filter: jest.fn(),
      };
      const expected = {
        type: filterActions.APPLY_FILTER,
        payload: {
          filter: {
            label: 'All',
            filter: expect.any(Function),
          },
        },
      };

      expect(filterActions.applyFilter(filter)).toEqual(expected);
    });
  });
});
