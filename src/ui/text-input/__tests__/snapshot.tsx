import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '..';

describe('TextInput', () => {
  it('should render', () => {
    const component = renderer.create(<TextInput/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
