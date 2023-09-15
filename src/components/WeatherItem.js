import React, { Component } from "react";
import { render } from "react-dom";
import "./WeatherItem.css";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import unknown from "../img/weather-icons/unknown.svg";

const WeatherItem = ({ WeatherData }) => {
  const getWeatherLogo = (id) => {
    switch (true) {
      case id < 300:
        return storm;
      case id >= 300 && id <= 499:
        return drizzle;
      case id >= 500 && id <= 599:
        return rain;
      case id >= 600 && id <= 699:
        return snow;
      case id >= 700 && id <= 799:
        return fog;
      case (id = 800):
        return clear;
      case (id = 801):
        return partlycloudy;
      case id >= 801 && id <= 805:
        return mostlycloudy;

      default:
        return null;
    }
  };

  const formatWeatherTime = (time) => {
    const date = new Date(time);

    // Get the hours and minutes from the Date object
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  console.log(WeatherData);
  return (
    <div id="container_comp">
      <div className="weather_information">
        <div id="image_info">
          <img
            src={partlycloudy}
            alt="weather status "
            id="weather_status"
          ></img>
          <p id="text_status">overcast clouds</p>
        </div>

        <p id="temp_txt">
          <strong>Temperature </strong>
          <span id="temp_from"> 10°C</span> to <span id="temp_to"> 11°C </span>
        </p>
        <p id="humidity_txt">
          <strong> Humidity</strong>
          <span id="humidity">78%</span>
          <span id="pressure_txt">
            <strong>Pressure</strong>
          </span>
          <span id="pressure"> 100848</span>
        </p>
      </div>
      <div className="temp_hours">
        {WeatherData.slice(0,7).map((x) => {
          return (
            <div className="time time3" key={x.dt}>
              <p>{formatWeatherTime(x.dt)}</p>
              <img
                src={getWeatherLogo(x.weather[0].id)}
                alt="Weather status "
              />
              <p>{x.main.temp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WeatherItem;