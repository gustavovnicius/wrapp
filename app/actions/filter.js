const APPLY_FILTER = 'APPLY_FILTER';

const applyFilter = filter => ({
  type: APPLY_FILTER,
  payload: {
    filter,
  },
});

module.exports = {
  APPLY_FILTER,
  applyFilter,
};
