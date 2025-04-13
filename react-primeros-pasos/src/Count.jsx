import React, { useState } from 'react';

function Count() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Contador</h1>
      <p>Valor: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador + 1</button>
    </>
  );
}

export default Count;
