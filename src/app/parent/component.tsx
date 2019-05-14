import React from 'react';
import TextInput from '../../ui/text-input';
import enhancer from './enhancer';

const Parent = enhancer(
  props => (
    <div>
      <TextInput
        {...props}
      />
    </div>
  )
);

export default Parent;
