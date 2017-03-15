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
    this.props.onSubmit(this.state.name, parseFloat(this.state.balance));

    this.setState({
      name: '',
      balance: '',
    });
  }

  render() {
    return (
      <Container>
        <Input
          label=""
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.handleNameChange(event)}
          rounded
          hideLabel
          type="text"
        />
        <Input
          label=""
          name="balance"
          placeholder="Balance"
          value={this.state.balance}
          onChange={event => this.handleBalanceChange(event)}
          rounded
          hideLabel
          type="number"
        />
        <Button style={{ width: '100%' }} onClick={() => this.addStatistic()}>
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
