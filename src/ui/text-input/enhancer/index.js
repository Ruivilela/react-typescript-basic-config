import React, { useState, useEffect } from 'react';

export default Component => p => {
  const { value, onUpdate, ...props } = p;

  const [valueState, setValueState ] = useState(value);

  const newOnChange = ({ target }) => {
    setValueState(target.value);
    onUpdate(target.value);
  }

  useEffect(
    () => {
      if(value !== valueState) {
        setValueState(value);
      }
    },
    [value]
  )

  return <Component
    {...props}
    value={valueState || ''}
    onChange={newOnChange}
  />;
};
