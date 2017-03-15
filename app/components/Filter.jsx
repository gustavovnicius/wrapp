import React, {
  PropTypes,
} from 'react';
import {
  Radio,
} from 'rebass';
import {
  Flex,
  Box,
} from 'reflexbox';

export default function Filter({ enabled, selected, applyFilter }) {
  return (
    <Flex align="center" justify="center">
      {
        enabled.map(filter => (
          <Box p={2} key={filter.label}>
            <Radio
              circle
              checked={selected.label === filter.label}
              onChange={() => applyFilter(filter)}
              label={filter.label}
              name="filter"
            />
          </Box>
          ))
      }
    </Flex>
  );
}

Filter.propTypes = {
  enabled: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired,
  applyFilter: PropTypes.func.isRequired,
};
