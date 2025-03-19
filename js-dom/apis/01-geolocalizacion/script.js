const myLocation = document.getElementById('geolocation');

const showPosition = (position) => {
  myLocation.innerHTML = 'Latitud : ' + position.coords.latitude + '<br> Longitud : ' + position.coords.longitude;
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myLocation.innerHTML = 'Geolocalizacion no disponible';
  }
};
