import React from 'react';
import renderer from 'react-test-renderer';
import App from '..';

describe('App', () => {
  it('should render', () => {
    const component = renderer.create(<App/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
