const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5, 6];

console.log(array2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2);

const set = new Set(['a', 'b', 'a', 'b']);
set.add('c');
console.log('Set');
console.log(set);
console.log(set.size);

console.log(Array.from(set));
