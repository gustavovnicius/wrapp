import React from 'react';
import {
  Container,
} from 'rebass';
import {
  Flex,
  Box,
} from 'reflexbox';
import Header from 'components/Header';
import ConnectedFilter from 'containers/ConnectedFilter';
import ConnectedNewStatisticForm from 'containers/ConnectedNewStatisticForm';
import ConnectedStatisticsList from 'containers/ConnectedStatisticsList';

export default function App() {
  return (
    <Container>
      <Box m={3}>
        <Header />
        <Flex align="center" justify="center" column>
          <ConnectedFilter />
          <Box m={2}>
            <ConnectedStatisticsList />
          </Box>
          <ConnectedNewStatisticForm />
        </Flex>
      </Box>
    </Container>
  );
}
