import React, {
  PropTypes,
} from 'react';
import {
  Container,
} from 'rebass';
import {
  Flex,
} from 'reflexbox';
import {
  connect,
} from 'react-redux';
import Header from 'components/Header';
import ConnectedNewStatisticForm from 'containers/ConnectedNewStatisticForm';

export function App({ statistics }) {
  return (
    <Container>
      <Header />
      <Flex align="center" justify="center" column>
        <div>
          <ul>
            {
              statistics.map((statistic, index) => (
                <li key={index}>
                  <p>Name: {statistic.name}</p>
                  <p>Balance: {statistic.balance}</p>
                </li>
                ))
            }
          </ul>
        </div>
        <ConnectedNewStatisticForm />
      </Flex>
    </Container>
  );
}

App.propTypes = {
  statistics: PropTypes.array.isRequired,
};

export function mapStateToProps(state) {
  return {
    statistics: state.statistics.data,
  };
}

export default connect(mapStateToProps)(App);
