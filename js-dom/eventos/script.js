function changeThisElement(element) {
  element.innerHTML = "Modificado desde JS";
  alert("Alerta");
}
const changeThisElementArrow = (element) => (element.innerHTML = "Modificado con Arrow Function ");

const displayDate = () => (document.getElementById("test").innerHTML = Date());
document.getElementById("btn").onclick = displayDate;

const checkCookies = () => {
  let text = navigator.cookieEnabled ? "Cookies Habilitadas" : "Cookies Deshabilitadas";
  document.getElementById("cookies").innerHTML = text;
};

const exitMsg = () => {
  alert("Estas saliendo del navegador");
};
