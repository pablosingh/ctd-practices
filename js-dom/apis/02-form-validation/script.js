const doValidation = () => {
  const number = document.getElementById('input');
  document.getElementById('validation').innerHTML = number.checkValidity() ? 'El numero es correcto' : number.validationMessage;
};
