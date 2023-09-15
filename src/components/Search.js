import React, { useState } from "react";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
function Search({ onSeachChange }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    // Pass the city to the parent component
    e.preventDefault();
    onSeachChange(city);
  };

  return (
    <form className="container" onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        id="input-name"
        placeholder="Type a city name"
        onChange={handleInputChange}
        value={city}
      />
      <button>Find weather</button>
    </form>
  );
}

export default Search;