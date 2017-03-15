import React, {
  PropTypes,
} from 'react';
import numeral from 'numeral';
import {
  Container,
  Stat,
  Card,
  Heading,
  Divider,
} from 'rebass';
import {
  Flex,
  Box,
} from 'reflexbox';

export default function Statistic({ name, balance }) {
  return (
    <Container>
      <Flex column>
        <Card width={350}>
          <Box mt={1}>
            <Heading>
              {name}
            </Heading>
          </Box>
          <Divider />
          <Flex justify="flex-end">
            <Stat
              label="Balance"
              unit=""
              value={numeral(balance).format('0,0.00')}
            />
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

Statistic.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};
