import React from 'react';
import {
  App,
  mapStateToProps,
  mapDispatchToProps,
} from 'containers/App';
import {
  shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';

describe('App', () => {
  const statisticsData = [
    {
      name: 'A name',
      balance: 1000,
    },
    {
      name: 'Another name',
      balance: 2000,
    }
  ];

  it('match the snapshot', () => {
    const app = renderer.create(
      <App statistics={statisticsData} addStatistic={() => {}} />
    ).toJSON();

    expect(app).toMatchSnapshot();
  });

  describe('component actions', () => {
    let app = undefined;

    beforeEach(() => {
      app = shallow(
        <App statistics={statisticsData} addStatistic={() => {}} />
      );
    })

    it('respond to name change', () => {
      const value = 'A value';
      const event = {
        target: {
          value: value
        }
      };

      app.instance().handleNameChange(event);

      expect(app.instance().state.name).toEqual(value);
    });

    it('respond to balance change', () => {
      const value = 1000;
      const event = {
        target: {
          value: value
        }
      };

      app.instance().handleBalanceChange(event);

      expect(app.instance().state.balance).toEqual(value);
    });

    it('call addStatistic with name and balance state', () => {
      const spy = jest.fn();
      const name = 'A name';
      const balance = 1000;

      app = shallow(
        <App statistics={statisticsData} addStatistic={spy} />
      );
      app.instance().setState({
        name,
        balance,
      });
      app.instance().addStatistic();

      expect(spy).toHaveBeenCalledWith(name, balance);
    });
  });

  describe('mapStateToProps', () => {
    it('map statistics data to component props', () => {
      const state = {
        statistics: {
          data: []
        }
      };
      const expected = {
        statistics: []
      };

      expect(mapStateToProps(state)).toEqual(expected);
    })
  });

  describe('mapDispatchToProps', () => {
    it('map dispatch to component props', () => {
      const dispatch = jest.fn();
      const expected = {
        addStatistic: expect.any(Function),
      };

      expect(mapDispatchToProps(dispatch)).toEqual(expected);
    })
  });
});
