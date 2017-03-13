import * as statisticsActions from 'actions/statistics';

describe('Statistics actions', () => {
  describe('addStatistic', () => {
    it('should return an addStatistic action', () => {
      const expected = {
        type: statisticsActions.ADD_STATISTIC,
        payload: {
          name: 'A name',
          balance: 1000
        }
      }

      expect(statisticsActions.addStatistic('A name', 1000)).toEqual(expected);
    });
  });
});
