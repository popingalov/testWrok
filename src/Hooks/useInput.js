import React, { useState } from 'react';

export default function useInput(ref, initialValue) {
  const [value, setValue] = useState(initialValue);

  const onClick = () => {
    ref.current.value = '';
  };

  const onChange = e => setValue(e.target.value);

  const onBlur = () => (ref.current.value = value);

  return { value, onClick, onChange, onBlur };
}
