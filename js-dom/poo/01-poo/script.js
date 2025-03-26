//  Prototipos, ahora se usa Class

function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.hacerSonido = function () {
  console.log('Sonido generico');
};

const miAnimal = new Animal('Perro');
console.log(miAnimal.nombre);
miAnimal.hacerSonido();

console.log(miAnimal.__proto__ == Animal.prototype);

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  getData() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
  }
}
const pablo = new Persona('Pablo', 35);
console.log(pablo.getData());
