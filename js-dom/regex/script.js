//    /patron/modificadores

// i  ignorar mayusculas y minusculas
// g  busca globalmente
// m  busqueda multilinea
// d  que coincida al comienzo y al final (2022 recien agregado
// cuidado con navegadores antiguos)

const text = 'Estudia en DigitalHouse con Sergie Code';
const res = text.replace(/sergie Code/i, 'Pablo');

console.log(res);

// /////////////////////////////////////////////////////

const text2 = 'HTML, CSS, Javascript, ReactJs';
const res2 = text2.match(/s/gi);
console.log(res2);

// /////////////////////////////////////////////////////

const text3 = 'HTML, CSS, Javascript, ReactJs';
const res3 = text3.match(/[JS]/gi);
console.log(res3);

// /////////////////////////////////////////////////////

const text4 = 'HTML, CSS, Javascript, ReactJs';
const res4 = text4.match(/[A-Z]/g);
console.log(res4);
// /////////////////////////////////////////////////////

const text5 = 'HTML, CSS, Javascript, ReactJs';
const res5 = text5.match(/[A-Za-z]/g);
console.log(res5);
// /////////////////////////////////////////////////////

const text6 = 'HTML, CSS, Javascript, ReactJs';
const res6 = text6.match(/[A-Z][a-z]/g);
console.log(res6);

// /////////////////////////////////////////////////////

const pattern = /[A-Z]/;
const pattern2 = /[0-9]/;
console.log(pattern.test('HTML, CSS, Javascript, ReactJs'));
console.log(pattern2.test('HTML, CSS, Javascript, ReactJs'));
