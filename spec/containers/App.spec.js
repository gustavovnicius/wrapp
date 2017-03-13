import React from 'react';
import App from 'containers/App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('match the snapshot', () => {
    const app = renderer.create(
      <App />
    ).toJSON();

    expect(app).toMatchSnapshot();
  });
});
