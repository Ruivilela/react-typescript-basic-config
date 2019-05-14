import React from 'react';
import enhancer from './enhancer';

const TextInput = enhancer(
  props => (
    <input
      {...props}
    />
  )
);

export default TextInput;
