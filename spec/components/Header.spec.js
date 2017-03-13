import React from 'react';
import renderer from 'react-test-renderer';
import Header from 'components/Header';

describe('Header', () => {
  it('match the snapshot', () => {
    const header = renderer.create(
      <Header />
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
})
