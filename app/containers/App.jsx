import React from 'react';
import {
  Container,
} from 'rebass';
import {
  Flex,
} from 'reflexbox';
import {
  connect
} from 'react-redux';

const statistics = [
  {
    name: 'A name',
    balance: 1000
  },
  {
    name: 'Another name',
    balance: 2000
  },
]

function App({statistics}) {
  return (
    <Container>
      <Flex align='center' justify='center'>
        <h1>Hello!</h1>
      </Flex>
      <Flex align='center' justify='center'>
        <ul>
          {
            statistics.map(statistic => {
              return (
                <li key={statistic.name}>
                  <p>Name: {statistic.name}</p>
                  <p>Balance: {statistic.balance}</p>
                </li>
              );
            })
          }
        </ul>
      </Flex>
    </Container>
  );
}

export default App;

// <App>
//   <Container>
//     <Header>
//     </Header>
//
//     <Body>
//       <StatisticsSelector></StatisticsSelector>
//       <StatisticsList></StatisticsList>
//       <NewStatisticForm></NewStatisticForm>
//     </Body>
//   </Container>
// </App>
