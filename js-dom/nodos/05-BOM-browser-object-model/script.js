console.log(window);

const clickMe = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log('Ancho : ' + width + ' Alto : ' + height);
  open('https://www.digitalhouse.com/ar', 'Digital House');
};

document.getElementById('screenw').innerHTML = screen.width + 'px';
document.getElementById('screenh').innerHTML = screen.height + 'px';
document.getElementById('screenc').innerHTML = screen.colorDepth + 'bits';
document.getElementById('location').innerHTML = location.href;

const historyBack = () => history.back();
document.getElementById('btn-h').addEventListener('click', historyBack);
const historyForward = () => history.forward();
document.getElementById('btn-h-2').addEventListener('click', historyForward);

document.getElementById('cookies').innerHTML = navigator.cookieEnabled ? 'Si' : 'No';
