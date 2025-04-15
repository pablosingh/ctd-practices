import React, { useState } from 'react';

export default function AddTask({ handle }) {
  const [inputValue, setInputValue] = useState('');
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    if (inputValue.trim() == '') return;
    handle(inputValue);
    setInputValue('');
  };
  return (
    <>
      <form onSubmit={submit}>
        <input type="text" value={inputValue} onChange={handleInput} placeholder="Ingrese una Tarea" />
      </form>
    </>
  );
}
