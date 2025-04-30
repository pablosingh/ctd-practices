import React, { useState } from 'react';
import './WeatherApp.css';

export const WeatherApp = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
  const difKelvin = 273.15;
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`);
      const data = await response.json();
      setWeatherData(data);
      //   console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <h1>WeatherApp</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} name="city" id="city" placeholder="Ingrese una ciudad" onChange={handleCityChange} />
        <button type="submit" onSubmit={handleSubmit}>
          Buscar
        </button>
      </form>
      {weatherData && (
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>La temperatura actual es {Math.floor(weatherData.main.temp - difKelvin)}ºC</p>
          <p>La condición meteorológica actual: {weatherData.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
        </div>
      )}
    </div>
  );
};
