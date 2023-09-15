import React, { Component } from "react";

const API_KEY = "<INSERT_OPENWEATHERMAP_API_KEY_HERE>";

class MyWeatherComponent extends Component {
  state = {
    weatherData: ""
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    fetch(
        `https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          weatherData: data
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.weatherData.name}
        {this.state.weatherData.main.temp}
      </div>
    );
  }
}

export default MyWeatherComponent;