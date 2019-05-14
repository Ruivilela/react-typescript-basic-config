import React from 'react';
import renderer from 'react-test-renderer';
import Parent from '..';

describe('Parent', () => {
  it('should render', () => {
    const component = renderer.create(<Parent/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
