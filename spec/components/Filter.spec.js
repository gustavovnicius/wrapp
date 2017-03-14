import React from 'react';
import renderer from 'react-test-renderer';
import {
  shallow,
} from 'enzyme';
import {
  Radio,
} from 'rebass';
import Filter from 'components/Filter';

describe('Filter', () => {
  let spy;
  let enabled;
  let selected;

  beforeEach(() => {
    spy = jest.fn();
    enabled = [
      {
        label: 'All',
        filter: jest.fn(),
      },
      {
        label: 'Positive',
        filter: jest.fn(),
      },
    ];
    selected = {
      label: 'All',
      filter: jest.fn(),
    };
  });

  it('match the snapshot', () => {
    const filter = renderer.create(
      <Filter enabled={enabled} selected={selected} applyFilter={spy} />,
    ).toJSON();

    expect(filter).toMatchSnapshot();
  });

  describe('component events', () => {
    let filter;

    beforeEach(() => {
      filter = shallow(
        <Filter enabled={enabled} selected={selected} applyFilter={spy} />,
      );
    });

    it('call applyFilter on a filter selection', () => {
      const expected = {
        label: 'Positive',
        filter: expect.any(Function),
      };

      filter.find(Radio).last().simulate('change');

      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
});
