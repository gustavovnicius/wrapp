const ADD_STATISTIC = 'ADD_STATISTIC';

const addStatistic = (name, balance) => ({
  type: ADD_STATISTIC,
  payload: {
    name,
    balance,
  },
});

module.exports = {
  ADD_STATISTIC,
  addStatistic,
};
