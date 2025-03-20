console.log('Mensaje 1 ');
console.group();
console.log('Mensaje 1 ');
console.log('Mensaje 1 ');
console.groupEnd();
console.log('otro');
console.groupCollapsed();
console.log('Mensaje 1 ');
console.log('Mensaje 1 ');
console.groupEnd();

const array = ['HTML', 'CSS', 'JS'];
console.table(array);

console.time('Cuanto tarda : ');
for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 50000; j++) {}
}
console.timeEnd('Cuanto tarda : ');

const otherFunc = () => console.trace();
const myFunc = () => otherFunc();
