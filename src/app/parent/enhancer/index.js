import React, { useState, useEffect } from 'react';

export default Component => p => {
  const { value, ...props } = p;

  const [valueState, setValueState] = useState(value)

  const onUpdate = x => {
    setValueState(x);
    console.log('here', valueState);
  };

  useEffect(
    () => {
      setValueState(value);
      console.log('here', valueState);
    },
    [value]
  );


  return <Component
    {...props}
    {...{value}}
    {...{onUpdate}}
  />;
};
