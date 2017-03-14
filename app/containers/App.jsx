import React from 'react';
import {
  Container,
} from 'rebass';
import {
  Flex,
} from 'reflexbox';
import Header from 'components/Header';
import ConnectedFilter from 'containers/ConnectedFilter';
import ConnectedNewStatisticForm from 'containers/ConnectedNewStatisticForm';
import ConnectedStatisticsList from 'containers/ConnectedStatisticsList';

export default function App() {
  return (
    <Container>
      <Header />
      <Flex align="center" justify="center" column>
        <ConnectedFilter />
        <ConnectedStatisticsList />
        <ConnectedNewStatisticForm />
      </Flex>
    </Container>
  );
}
