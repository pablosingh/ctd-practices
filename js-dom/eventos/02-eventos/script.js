const upperCase = () => {
  const input = document.getElementById("name");
  input.value = input.value.toUpperCase();
};

const mouseOver = (element) => {
  element.innerHTML = "Entrando del DIV";
};
const mouseOut = (element) => {
  element.innerHTML = "Saliendo del DIV";
};

const changeStyle = (element) => {
  element.style.background = "aqua";
};
