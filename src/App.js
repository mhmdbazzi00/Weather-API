import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./FakeWeatherData.json";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Search  searchData={fakeWeatherData.city}/>
      <WeatherItem WeatherData={fakeWeatherData.list} />
    </div>
  );
};

export default App;
