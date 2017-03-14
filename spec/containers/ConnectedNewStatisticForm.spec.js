import {
  mapStateToProps,
  mapDispatchToProps,
} from 'containers/ConnectedNewStatisticForm';

describe('ConnectedNewStatisticForm', () => {
  describe('mapStateToProps', () => {
    it('does not map nothing to component props', () => {
      const state = {
        statistics: {
          data: [],
        },
      };
      const expected = {};

      expect(mapStateToProps(state)).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('map addStatistic action to component props', () => {
      const dispatch = jest.fn();
      const expected = {
        onSubmit: expect.any(Function),
      };

      expect(mapDispatchToProps(dispatch)).toEqual(expected);
    });
  });
});
