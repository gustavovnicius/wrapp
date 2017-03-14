import {
  allFilter,
  positiveBalanceFilter,
  negativeBalanceFilter,
  enabledFilters,
  defaultFilter,
} from 'plugins/filter';

describe('Filter plugin', () => {
  const statistics = [
    {
      name: 'Positive',
      balance: 100,
    },
    {
      name: 'Negative',
      balance: -100,
    },
  ];

  describe('allFilter', () => {
    it('return the same collection', () => {
      expect(statistics.filter(allFilter)).toEqual(statistics);
    });
  });

  describe('positiveBalanceFilter', () => {
    it('return only statistics with positive balance', () => {
      const expected = [
        {
          name: 'Positive',
          balance: 100,
        },
      ];

      expect(statistics.filter(positiveBalanceFilter)).toEqual(expected);
    });
  });

  describe('negativeBalanceFilter', () => {
    it('return only statistics with negative balance', () => {
      const expected = [
        {
          name: 'Negative',
          balance: -100,
        },
      ];

      expect(statistics.filter(negativeBalanceFilter)).toEqual(expected);
    });
  });

  describe('defaultFilter', () => {
    it('return all as default', () => {
      const expected = {
        label: 'All',
        filter: allFilter,
      };

      expect(defaultFilter()).toEqual(expected);
    });
  });

  describe('enabledFilters', () => {
    it('return all enabled filters', () => {
      const expected = [
        {
          label: 'All',
          filter: allFilter,
        },
        {
          label: 'Positive',
          filter: positiveBalanceFilter,
        },
        {
          label: 'Negative',
          filter: negativeBalanceFilter,
        },
      ];

      expect(enabledFilters()).toEqual(expected);
    });
  });
});
