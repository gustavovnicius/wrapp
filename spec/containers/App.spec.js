import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  createStore,
} from 'redux';
import reducers from 'reducers';
import renderer from 'react-test-renderer';
import App from 'containers/App';

describe('App', () => {
  it('match the snapshot', () => {
    const store = createStore(reducers);
    const app = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();

    expect(app).toMatchSnapshot();
  });
});
