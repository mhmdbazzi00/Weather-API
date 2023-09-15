import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div id="search">
        {this.state.input}
        <input type="text" placeholder="Type in a city name" id="input-name" onChange={event => {
          this.setState({ input: event.target.value });
        }}
        />
        <button onClick={event => {
          this.props.handleInput(this.state.input);
        }}
        >
        FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;