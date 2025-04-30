import React from 'react';
import './WeatherApp.css';

export const WeatherApp = () => {
  const API_KEY = 'dc614accdf2a3284002e1619e8883d75';
  const city = 'londres';
  const urlBase = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=es`;
  const difKelvin = 273.15;
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <h2>WeatherApp</h2>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="city">Ciudad</label> */}
        <input type="text" name="city" id="city" placeholder="Ingrese una ciudad" />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};
