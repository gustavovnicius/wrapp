export const allFilter = () => true;
export const positiveBalanceFilter = statistic => statistic.balance >= 0;
export const negativeBalanceFilter = statistic => statistic.balance < 0;

export function enabledFilters() {
  return [
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
}

export function defaultFilter() {
  return {
    label: 'All',
    filter: allFilter,
  };
}
