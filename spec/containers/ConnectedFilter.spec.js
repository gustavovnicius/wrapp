import React from 'react';
import {
  mapStateToProps,
  mapDispatchToProps,
} from 'containers/ConnectedFilter';

describe('ConnectedFilter', () => {
  describe('mapStateToProps', () => {
    it('map the enabled filters to component props', () => {
      const state = {
        filter: {
          enabled: [],
          selected: {},
        }
      };
      const expected = {
        enabled: [],
        selected: {},
      };

      expect(mapStateToProps(state)).toEqual(expected);
    })
  });

  describe('mapDispatchToProps', () => {
    it('map addStatistic action to component props', () => {
      const dispatch = jest.fn();
      const expected = {
        applyFilter: expect.any(Function),
      };

      expect(mapDispatchToProps(dispatch)).toEqual(expected);
    })
  });
});
