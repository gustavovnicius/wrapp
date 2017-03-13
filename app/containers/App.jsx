import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Container,
  Input,
  Button,
} from 'rebass';
import {
  Flex,
} from 'reflexbox';
import {
  connect,
} from 'react-redux';
import {
  addStatistic,
} from 'actions/statistics';
import Header from 'components/Header';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      balance: '',
    };
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleBalanceChange(event) {
    this.setState({
      balance: event.target.value,
    });
  }

  addStatistic() {
    this.props.addStatistic(this.state.name, this.state.balance);
  }

  render() {
    return (
      <Container>
        <Header />
        <Flex align="center" justify="center" column>
          <div>
            <ul>
              {
                this.props.statistics.map((statistic, index) => (
                  <li key={index}>
                    <p>Name: {statistic.name}</p>
                    <p>Balance: {statistic.balance}</p>
                  </li>
                  ))
              }
            </ul>
          </div>
          <div>
            <Input
              label="Name"
              name="name"
              placeholder="Statistic name"
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
              rounded
              type="text"
            />
            <Input
              label="Balance"
              name="balance"
              placeholder="Statistic balance"
              value={this.state.balance}
              onChange={this.handleBalanceChange.bind(this)}
              rounded
              type="number"
            />
            <Button onClick={this.addStatistic.bind(this)}>
              Add
            </Button>
          </div>
        </Flex>
      </Container>
    );
  }
}

App.propTypes = {
  statistics: PropTypes.array.isRequired,
  addStatistic: PropTypes.func.isRequired,
};

export function mapStateToProps(state) {
  return {
    statistics: state.statistics.data,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addStatistic: (name, balance) => dispatch(addStatistic(name, balance)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
