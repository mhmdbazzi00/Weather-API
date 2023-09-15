import React, { Component, useState, useEffect } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/Weatheritem";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";

// const apiKey = "90f64017a36e1582b1d2377df050dbce";

const App = () => {
  const [weatherData, setWeatherData] = useState(fakeWeatherData);

  // Function fetching the temperature of a certain city

  const fetchWeatherData = (city) =>
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherData(res);
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    // Fetching initial weather in the component js
    fetchWeatherData("London");
  }, []);

  return (
    <div className="app">
      <Search onSeachChange={fetchWeatherData} />
      <WeatherItem weatherData={weatherData.list} />
    </div>
  );
};

export default App;
