const action = () => {
  setTimeout(() => console.log('Accion del boton'), 2000);
};

const action2 = () => {
  const interval = setInterval(() => console.log('Intervalo'), 1000);
  setTimeout(() => {
    console.log('Detenemos intervalo');
    clearInterval(interval);
  }, 10000);
};
