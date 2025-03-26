class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
  }
  setNum1(val) {
    this.num1 = Number(val);
  }
  setNum2(val) {
    this.num2 = Number(val);
  }
  getNum1() {
    return this.num1;
  }
  getNum2() {
    return this.num2;
  }
  sumar() {
    return this.num1 + this.num2;
  }
  restar() {
    return this.num1 - this.num2;
  }
  multiplicar() {
    return this.num1 * this.num2;
  }
  dividir() {
    if (this.num2 != 0) {
      return this.num1 / this.num2;
    } else {
      return 'Num 2 debe ser distinto de 0';
    }
  }
}

const operation = (op) => {
  const num1 = document.getElementById('inputNum1').value;
  const num2 = document.getElementById('inputNum2').value;
  const calc = new Calculator();
  if (num1.trim() == '' || num2.trim() == '') {
    alert('Ingrese los valores');
    return;
  }
  calc.setNum1(num1);
  calc.setNum2(num2);
  let res;
  switch (op) {
    case 'sumar':
      res = calc.sumar();
      break;
    case 'restar':
      res = calc.restar();
      break;
    case 'multiplicar':
      res = calc.multiplicar();
      break;
    case 'dividir':
      res = calc.dividir();
      break;
    default:
      res = 'Operacion no valida';
      break;
  }
  document.getElementById('res').innerHTML = `Resultado : ${res}`;
};
