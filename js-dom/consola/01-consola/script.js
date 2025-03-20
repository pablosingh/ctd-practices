const css = 'color: red; background: gray;';
const css2 = 'color: green; background: gray;';

// %c le da estilos a la consola
console.log('%cTexto con estilo y %ctexto con otro estilo', css, css2);

const a = 6;
const b = 6;
console.assert(a + b == 11, 'No es 11');

// console.clear();

console.error('Mensaje de Error');
console.warn('Mensaje de Advertencia');
