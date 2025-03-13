const salutations = document.querySelectorAll("p.saludo");

document.getElementById("test").innerHTML = "Listando los saludos : " + salutations[0].innerHTML;

const form = document.forms["form1"];
let text = "";
for (let i = 0; i < form.length; i++) {
  text += form.elements[i].value + "<br>";
}

document.getElementById("test2").innerHTML = text;
