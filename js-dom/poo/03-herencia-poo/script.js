class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `Hola soy ${this.nombre}`;
  }
  decirEdad() {
    return `tengo ${this.edad} años`;
  }
}

class Alumno extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }
  presentarse = () => `${super.saludar()}, ${super.decirEdad()}, del curso: ${this.curso}`;
}

class Profesor extends Persona {
  constructor(nombre, edad, materia) {
    super(nombre, edad);
    this.materia = materia;
  }
  presentarse = () => `${super.saludar()}, ${super.decirEdad()}, Profesor de la materia: ${this.materia}`;
}
//////////////////////////////////////////////
const saludarYedad = () => {
  const inputNombre = document.getElementById('nombre').value;
  const inputEdad = document.getElementById('edad').value;
  const rol = document.getElementById('rol').value;
  let persona;
  switch (rol) {
    case 'Alumno':
      const curso = prompt('Curso del Alumno : ');
      persona = new Alumno(inputNombre, inputEdad, curso);
      break;
    case 'Profesor':
      const materia = prompt('Materia del Profesor : ');
      persona = new Profesor(inputNombre, inputEdad, materia);
      break;
    default:
      alert('Seleccione un rol');
      return;
  }

  document.getElementById('res').innerHTML = persona.presentarse();
};
