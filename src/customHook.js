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

export {
  useCounter
}
