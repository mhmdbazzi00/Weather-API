import React from "react";
import weather_partlycloudy_icon from "../img/weather-icons/partlycloudy.svg";
import weather_clear_icon from "../img/weather-icons/clear.svg";
// import weather_cloudy_icon from "../img/weather-icons/cloudy.svg";
import weather_drizzle_icon from "../img/weather-icons/drizzle.svg";
import weather_fog_icon from "../img/weather-icons/fog.svg";
import weather_mostlycloudy_icon from "../img/weather-icons/mostlycloudy.svg";
import weather_rain_icon from "../img/weather-icons/rain.svg";
import weather_snow_icon from "../img/weather-icons/snow.svg";
import weather_storm_icon from "../img/weather-icons/storm.svg";
// import weather_unknown_icon from "../img/weather-icons/unknown.svg";

export default function WeatherItem({data}) {
  function getIcon(id){
    switch(true){
      case (id < 300):
        return weather_storm_icon;
      case (300 <= id && id < 500):
        return weather_drizzle_icon;
      case (500 <= id && id <600):
        return weather_rain_icon;
      case (600 <= id && id < 700):
        return weather_snow_icon;
      case (700 <= id && id < 800):
        return weather_fog_icon;
      case (id == 800):
        return weather_clear_icon;
      case (id == 801):
        return weather_partlycloudy_icon;
      case (801 < id && id < 806):
        return weather_mostlycloudy_icon;
      default :
        return "null";
    }
  }
  return (
    <main>
      <article id="wrapper">
        <section id="figure">
          <img id="iconNow" src={weather_partlycloudy_icon} alt="Weather icon" />
          <p id="labelNow">overcast clouds</p>
        </section>
        <section id="temperature">
          <p className="marginFix label">Temperature</p>
          {data.slice(6,7).map((item, index) => (
          <p className="marginFix" id="from" key={index}>{item.main.temp_min}</p> ))}
          <p className="marginFix">to</p>
          {data.slice(0,1).map((item, index) => (
          <p className="marginFix" id="to" key={index}>{item.main.temp_max}</p> ))}
        </section>
        <section id="humidPress">
          <p className="label marginFix">Humidity</p>
          {data.slice(0,1).map((item, index) => (
          <p id="humid" className="value marginFix" key={index}>{item.main.humidity}%</p> ))}
          <p className="label marginFix">Pressure</p>
          {data.slice(0,1).map((item, index) => (
          <p id="press" className="value marginFix" key={index}>{item.main.pressure}</p> ))}
        </section>
        <div id="daily_weather">
          <section id="first">
            {data.slice(0,7).map((item, index) => (
            <span key={index}>{item.dt_txt.slice(11,16)}</span> ))}
          </section>
          <section id="second">
          {data.slice(0,7).map((item) => (
          <img src={getIcon(item.weather[0].id)} alt="weather icon"></img>
          ))}
          </section>
          <section id="third">
          {data.slice(0,7).map((item, index) => (
          <span key={index}>{item.main.temp}</span>
          ))}
          </section>
        </div>
      </article>
    </main>
  );
}
