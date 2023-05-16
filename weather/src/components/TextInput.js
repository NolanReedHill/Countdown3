import React, {useEffect, useState} from 'react';
import WeatherData from './WeatherData.js';
export default function TextInput({data}) {
    const [geoData, setGeoData] = useState([]);
    const address = data.City+","+data.State+","+data.Country;
    const url = new URL("http://api.openweathermap.org/geo/1.0/direct");
    url.searchParams.append("q",address);
    url.searchParams.append("limit",1);
    url.searchParams.append("appid","8eab36113a8ca510a047d789045f2898");
  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setGeoData(data))
    .catch((error) => console.log("Error:",error))
  }, [])
    return (
        <>
        {geoData.length === 0? <p>Loading</p> : 
      <WeatherData
      data = {geoData}
      />
    }
    </>

    );
  }
  