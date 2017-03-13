import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  createStore,
} from 'redux';
import {
  App,
  mapStateToProps,
} from 'containers/App';
import reducers from 'reducers';
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
    const store = createStore(reducers);
    const app = renderer.create(
      <Provider store={store}>
        <App statistics={statisticsData} addStatistic={() => {}} />
      </Provider>
    ).toJSON();

    expect(app).toMatchSnapshot();
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
});
