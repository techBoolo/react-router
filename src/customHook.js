import { useState } from 'react';

const useCounter = () => {
  const [ value, setValue ] = useState(0);  

  const increase = () => {
    setValue(value + 1);
  } 
  const decrease = () => {
    setValue(value - 1);
  } 
  const reset = () => {
    setValue(0);
  } 

  return {
    value,
    increase,
    decrease,
    reset
  }
}

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (ev) => {
    setValue(ev.target.value)
  }

  return {
    type,
    value, 
    onChange
  }
}

export {
  useCounter,
  useField
}
