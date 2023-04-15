import React, {useEffect, useState} from 'react';
import WeatherData from './WeatherData.js';
export default function TextInput() {

    const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
    .then((response) => response.json())
    .then((data) => setWeatherData(data.results))
    .catch((error) => console.log("Error:",error))
  }, [])
    console.log(weatherData);
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
 
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
  
    return (
        <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          City: <input name="City" 
          />
        </label>
        <label>
          State: <input name="State" 
          />
        </label>
        <label>
          Country: 
          <input name="Country"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    <WeatherData
    wdata={weatherData}
    />
    </>

    );
  }
  