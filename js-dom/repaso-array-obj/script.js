const array = ["HTML", "CSS", "JavaScript", "ReactJS"];

const obj = {
  nombre: "Pablo",
  ocupacion: "desarrollador",
  materia: "JS para DOM",
};

const arrayObjLiterales = [
  { materia: "HTML", dificultad: 6, necesario: true },
  { materia: "CSS", dificultad: 8, necesario: true },
  { materia: "JavaScript", dificultad: 9.5, necesario: false },
  { materia: "ReactJS", dificultad: 8, necesario: false },
];

let text = "";
for (let arr of array) {
  text += arr + ", ";
}
console.log(text);
text = "";

for (let key in obj) {
  text += obj[key] + ", ";
}
console.log(text);
text = "";

for (let obj of arrayObjLiterales) {
  text += obj.materia + ", ";
}
console.log(text);
