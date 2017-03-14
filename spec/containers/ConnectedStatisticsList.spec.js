import React from 'react';
import {
  mapStateToProps,
} from 'containers/ConnectedStatisticsList';

describe('ConnectedStatisticsList', () => {
  describe('mapStateToProps', () => {
    it('map statistics list to component props', () => {
      const state = {
        statistics: {
          data: []
        }
      };
      const expected = {
        statistics: []
      };

      expect(mapStateToProps(state)).toEqual(expected);
    })
  });
});
