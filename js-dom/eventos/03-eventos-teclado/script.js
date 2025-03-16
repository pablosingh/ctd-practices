const keyDown = ($event) => {
  const key = $event.key;
  console.log("down = " + key);
};
const keyUp = ($event) => {
  const key = $event.key;
  console.log("up = " + key);
};
const keyPress = ($event) => {
  const key = $event.key;
  console.log("press = " + key);
};
const keyAlt = ($event) => {
  const key = $event.key;
  const alt = $event.altKey;
  console.log("tecla = " + key);
  document.getElementById("alt").innerHTML = alt ? "Si es Alt" : "No es Alt";
};
const key5 = ($event) => {
  const key = $event.key;
  const mod = $event.getModifierState("CapsLock");
  console.log("tecla = " + key);
  document.getElementById("alt5").innerHTML = mod ? "Si es Capslock" : "No es Capslock";
};
