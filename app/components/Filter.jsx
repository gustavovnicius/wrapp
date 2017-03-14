import React, {
  PropTypes,
} from 'react';
import {
  Radio,
} from 'rebass';
import {
  Flex,
} from 'reflexbox';

export default function Filter({ enabled, selected, applyFilter }) {
  return (
    <Flex align="center" justify="center">
      {
        enabled.map(filter => (
          <Radio
            key={filter.label}
            circle
            checked={selected.label === filter.label}
            onChange={() => applyFilter(filter)}
            label={filter.label}
            name="filter"
          />
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
