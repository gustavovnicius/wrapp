import React from 'react';
import renderer from 'react-test-renderer';
import {
  shallow,
} from 'enzyme';
import {
  Input,
  Button,
} from 'rebass';
import NewStatisticForm from 'components/NewStatisticForm';

describe('NewStatisticForm', () => {
  it('match the snapshot', () => {
    const form = renderer.create(
      <NewStatisticForm onSubmit={jest.fn()} />,
    ).toJSON();

    expect(form).toMatchSnapshot();
  });

  describe('component events', () => {
    const name = 'Name';
    const balance = 1000;
    let spy;
    let form;

    beforeEach(() => {
      spy = jest.fn();
      form = shallow(
        <NewStatisticForm onSubmit={spy} />,
      );
    });

    it('call handleNameChange on name input change', () => {
      const event = {
        target: {
          value: name,
        },
      };

      form.find(Input).first().simulate('change', event);

      expect(form.instance().state.name).toEqual(name);
    });

    it('call handleBalanceChange on name input change', () => {
      const event = {
        target: {
          value: balance,
        },
      };

      form.find(Input).last().simulate('change', event);

      expect(form.instance().state.balance).toEqual(balance);
    });

    it('call addStatistic with name and balance state', () => {
      form.instance().setState({
        name,
        balance,
      });
      form.find(Button).simulate('click');

      expect(spy).toHaveBeenCalledWith(name, balance);
    });

    it('clear state after addStatistic is called', () => {
      form.instance().setState({
        name,
        balance,
      });
      form.find(Button).simulate('click');

      expect(form.instance().state).toEqual({ name: '', balance: '' });
    });
  });
});
