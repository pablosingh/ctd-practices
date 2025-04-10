import React from 'react';

export default function EventOne() {
  const handleKeyUp = (event) => {
    if (event.shiftKey) {
      console.log(event.key);
    }
  };
  return (
    <>
      <input type="text" placeholder="Ingrese texto" onKeyUp={handleKeyUp} />
    </>
  );
}
