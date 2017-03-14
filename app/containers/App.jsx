import React from 'react';
import {
  Container,
} from 'rebass';
import {
  Flex,
} from 'reflexbox';
import Header from 'components/Header';
import ConnectedNewStatisticForm from 'containers/ConnectedNewStatisticForm';
import ConnectedStatisticsList from 'containers/ConnectedStatisticsList';

export default function App() {
  return (
    <Container>
      <Header />
      <Flex align="center" justify="center" column>
        <ConnectedStatisticsList />
        <ConnectedNewStatisticForm />
      </Flex>
    </Container>
  );
}
