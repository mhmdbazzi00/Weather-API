import React, { Component } from "react";
import Search from "./components/Search";
import weather_icon from "./img/weather-icons/partlycloudy.svg";
import weather_clear_icon from "./img/weather-icons/clear.svg";
import SayHi, { SayHello } from "./components/WeatherItem";
import FakeWeatherData from "./FakeWeatherData.json"
import WeatherItem from "./components/WeatherItem";



import "./App.css";
import FetchData from "./FetchData";

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
        <WeatherItem data={FakeWeatherData}/>
      </div>
    );
  }
}

export default App;
