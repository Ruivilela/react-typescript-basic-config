---
to: <%= root %>/<%= path %>/tests/snaphsot.tsx
---
import React from 'react';
import renderer from 'react-test-renderer';
import <%= _componentName %> from '..';

describe('<%= _componentName %>', () => {
  it('should render', () => {
    const component = renderer.create(<<%= _componentName %>/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
