import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import TextInput from '..';

storiesOf('ui/text-input', module)
  .add('Default', () => (
    <TextInput
      value={text('value')}
      onUpdate={x => console.log('onUpdate', x)}
    />
  ));

