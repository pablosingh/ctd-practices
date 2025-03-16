const addClass = () => {
  const divClassList = document.getElementById("div").classList;
  divClassList.add("colorado");
};
const removeClass = () => {
  document.getElementById("div").classList.remove("colorado");
};
const toggleClass = () => {
  document.getElementById("div").classList.toggle("colorado");
};
