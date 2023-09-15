import React, { Component } from "react";
import Search from "./components/Search";
import weather_icon from "./img/weather-icons/partlycloudy.svg"
import weather_clear_icon from "./img/weather-icons/clear.svg"
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mohammad"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };
render() {
    return (
      <div className="app">
        <Search handleInput={this.handleInputChange} />
        <main>
          <article id="wrapper">
            <section id="figure">
              <img id="iconNow" src={weather_icon} alt="Weather icon" />
              <p id="labelNow">overcast clouds</p>
            </section>
            <section id="temperature">
              <p class="marginFix label">Temperature</p>
              <p class="marginFix" id="from">10</p>
              <p class="marginFix">to</p>
              <p class="marginFix" id="to">11 c</p>
            </section>
            <section id="humidPress">
              <p class="label marginFix">Humidity</p>
              <p id="humid" class="value marginFix">78%</p>
              <p class="label marginFix">Pressure</p>
              <p id="press" class="value marginFix">1008.50</p>
            </section>

          <div id="daily_weather">
            <section id="first">
              <span>03:00</span>
              <span>06:00</span>
              <span>09:00</span>
              <span>12:00</span>
              <span>15:00</span>
              <span>18:00</span>
              <span>21:00</span>
            </section>
            <section id="second">
              <img src={weather_icon}></img>
              <img src={weather_icon}></img>
              <img src={weather_clear_icon}></img>
              <img src={weather_clear_icon}></img>
              <img src={weather_clear_icon}></img>
              <img src={weather_clear_icon}></img>
              <img src={weather_icon}></img>
            </section>
            <section id="third">
              <span>8°C</span>
              <span>9°C</span>
              <span>14°C</span>
              <span>17°C</span>
              <span>18°C</span>
              <span>16°C</span>
              <span>13°C</span>
            </section>
          </div>
          </article>

        </main>
      </div>
    );
  }
}

export default App;
