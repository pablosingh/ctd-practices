import React, { useMemo, useState } from 'react';

export const CalculoPesado = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [show, setShow] = useState(true);
  const getCalculo = (arrayNumbers) =>
    useMemo(() => {
      console.log('Calculando...');
      return arrayNumbers.reduce((a, b) => a * b);
    }, [numbers]);
  const getCalculoDos = (arrayNumbers) => {
    console.log('Calculando...');
    return arrayNumbers.reduce((a, b) => a * 10);
  };
  const addNumber = () => {
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    console.log(numbers);
  };
  const memorizedValue = useMemo(() => getCalculoDos(numbers), [numbers]);
  return (
    <>
      <h2>Calculo Pesado: </h2>

      <button className="btn btn-info" onClick={() => setShow((prev) => !prev)}>
        {show ? 'Ocultar' : 'Mostrar'}
      </button>
      <button className="btn btn-danger" onClick={() => addNumber()}>
        Agregar numero
      </button>
      <h3>El calculo es: {getCalculo(numbers)} </h3>
      <h3>Otro calculo es: {memorizedValue} </h3>
      {show && <h6> Los numeros son: {numbers}</h6>}
    </>
  );
};
