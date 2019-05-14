import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Parent from '..';

storiesOf('Parent', module)
  .add('Default', () => (
    <Parent
      value={text('value')}
    />
  ));

