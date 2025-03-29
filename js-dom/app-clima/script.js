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
    .then((data) => showWeather(data))
    .catch((error) => console.error(error));
}

function showWeather(data) {
  console.log(data);
  const divResponseData = document.getElementById('responseData');
  divResponseData.innerHTML = '';

  const city = data.name;
  const countryName = data.sys.country;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  const cityInfo = document.createElement('h2');
  cityInfo.textContent = `${city}, ${countryName}`;

  const tempInfo = document.createElement('p');
  tempInfo.textContent = `La temperatura es : ${Math.floor(temp - diffKelvin)} °C`;

  const humidityInfo = document.createElement('p');
  humidityInfo.textContent = `La humedad es ${humidity} %`;

  const iconInfo = document.createElement('img');
  iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const descriptionInfo = document.createElement('p');
  descriptionInfo.textContent = `Descripcion meteorologica: ${description}`;

  divResponseData.appendChild(cityInfo);
  divResponseData.appendChild(tempInfo);
  divResponseData.appendChild(humidityInfo);
  divResponseData.appendChild(iconInfo);
  divResponseData.appendChild(descriptionInfo);
}
