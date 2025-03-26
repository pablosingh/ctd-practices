class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola soy ${this.nombre}`);
    return `Hola soy ${this.nombre}`;
  }
  decirEdad() {
    console.log(`Mi edad es: ${this.edad}`);
    return `Mi edad es: ${this.edad}`;
  }
}

const pablo = new Persona('Pablo', 35);
const maga = new Persona('Maga', 35);

pablo.saludar();
maga.saludar();

const saludarYedad = () => {
  const inputNombre = document.getElementById('nombre').value;
  const inputEdad = document.getElementById('edad').value;
  const otraPersona = new Persona(inputNombre, inputEdad);
  document.getElementById('res').innerHTML = otraPersona.saludar() + ' ' + otraPersona.decirEdad();
};
