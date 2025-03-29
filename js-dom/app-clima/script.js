const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = 'dc614accdf2a3284002e1619e8883d75';
const diffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  if (city) {
    fetchWeather(city);
  } else {
    alert('Ingrese una ciudad valida');
  }
});

function fetchWeather(city) {
  fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
