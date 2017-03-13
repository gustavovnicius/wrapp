import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Container,
  Input,
  Button,
} from 'rebass';

class NewStatisticForm extends Component {
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
    this.props.onSubmit(this.state.name, this.state.balance);

    this.setState({
      name: '',
      balance: '',
    });
  }

  render() {
    return (
      <Container>
        <Input
          label="Name"
          name="name"
          placeholder="Statistic name"
          value={this.state.name}
          onChange={event => this.handleNameChange(event)}
          rounded
          type="text"
        />
        <Input
          label="Balance"
          name="balance"
          placeholder="Statistic balance"
          value={this.state.balance}
          onChange={event => this.handleBalanceChange(event)}
          rounded
          type="number"
        />
        <Button onClick={() => this.addStatistic()}>
          Add
        </Button>
      </Container>
    );
  }
}

NewStatisticForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewStatisticForm;
