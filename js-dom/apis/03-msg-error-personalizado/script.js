const doValidation = () => {
  const myName = document.getElementById('myName');
  document.getElementById('error').innerHTML = myName.checkValidity() ? 'Nombre correcto' : 'Error - Ingrese un nombre correcto';
};
