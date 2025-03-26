const texto = 'ABC';
const patron = /[^a-z]/;
// ^ es la negacion
// \d es para buscar digitos

const res = patron.test(texto);

document.getElementById('texto').innerHTML = texto;
document.getElementById('res').innerHTML = `Se encontró el patron : ${patron} ??? ${res ? 'Si' : 'No'}`;

// /////////////////////////////

console.log('Inicia con ...');
const texto2 = 'HTML, CSS, Javascript';
const patron2 = /^HTML/;
console.log(patron2.test(texto2));
// /////////////////////////////

console.log('Termina con ...');
const texto3 = 'HTML, CSS, Javascript, React';
const patron3 = /React$/;
console.log(patron3.test(texto3));
// /////////////////////////////

console.log('Email ? ...');
const texto4 = 'pablo@hotmail.com';
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
console.log(emailRegex.test(texto4));
