// Creamos un parrafo
const paragraph = document.createElement("p");
// Creamos un nodo de texto
const node = document.createTextNode("Texto nuevo desde JS");
// Incorporamos el nodo en el parrafo
paragraph.appendChild(node);
// Agregamos todo al div
const div1 = document.getElementById("div1");
div1.appendChild(paragraph);
// Hacemos lo mismo pero lo agregamos antes ============================
const p3 = document.createElement("p");
const node3 = document.createTextNode("Antes por JS");
p3.appendChild(node3);
const p1 = document.getElementById("p1");
div1.insertBefore(p3, p1);
// Eliminar Con remove o removeChild ============================
const p2 = document.getElementById("p2");
// p2.remove();
// div1.removeChild(p2);

// Reemplazar ============================
const p4 = document.createElement("p");
const node4 = document.createTextNode("Texto en reemplazo");
p4.appendChild(node4);
div1.appendChild(p4);
div1.replaceChild(p4, p2);
