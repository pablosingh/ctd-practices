import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => decrement(5, false)} className="btn btn-primary">
        -1
      </button>
      <button onClick={() => reset()} className="btn btn-danger">
        Reset
      </button>
      <button onClick={() => increment(5)} className="btn btn-primary">
        +1
      </button>
    </>
  );
};
