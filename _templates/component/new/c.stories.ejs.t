---
to: <%= root %>/<%= path %>/__tests__/stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import <%= _componentName %> from '..';

storiesOf('<%= _componentName %>', module)
  .add('Default', () => (
    <<%= _componentName %>/>
  ));

