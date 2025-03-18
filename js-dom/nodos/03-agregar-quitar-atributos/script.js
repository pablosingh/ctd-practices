const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");

let text = paragraph1.getAttribute("class");
document.getElementById("atribute").innerHTML = text;

paragraph2.setAttribute("class", "colorado");

document.getElementById("input").setAttribute("value", "Pablo Singh");
