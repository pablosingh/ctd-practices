import React from 'react';

export const IncrementComponent = React.memo(({ increment }) => {
  console.log('Redibujando');
  return (
    <>
      IncrementComponent
      <button className="btn btn-success" onClick={() => increment(1)}>
        Incrementar + 1
      </button>
    </>
  );
});
