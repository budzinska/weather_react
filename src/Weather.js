import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";

export default function Weather() {
  let [city, setCity] = useState();
  let [weather, setWeather] = useState();

  function showWeather(response) {
    let data = response.data;
    setWeather({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    let apiKey = "6d0dc84f33996746a53bd0932ee1515d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    event.preventDefault();
    axios
      .get(url)
      .then(showWeather)
      .catch(() => {
        setWeather(null);
        alert(`City ${city} not found`);
      });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} onChange={updateCity} />
      <WeatherDetails weather={weather} />
    </div>
  );
}
