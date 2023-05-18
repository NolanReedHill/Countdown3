import React, {useEffect, useState} from 'react';
import WeatherData from './WeatherData.js';
import Popup from './Popup.js';
import { Button } from '@mui/material';
export default function TextInput({data}) {
    const [isAddressValid, setIsAddressValid] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => setIsAddressValid(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  function badAddress() {
    window.location.reload();
  }
  function displayPopup() {
    console.log(geoData.length===0)
    if (isAddressValid && geoData.length ===0)
    return true;
    if (geoData.length !== 0)
    return true;
  }
    return (
        <>
        {displayPopup()? <p></p> :
        <Popup content={<>
          <b>Location Not Found</b>
          <p>Please try a different location.</p>
          <Button onClick= {badAddress} variant= "contained">Go Back</Button>
        </>}/>

        }
        {geoData.length === 0? <p>Loading</p> : 
        <>
      <WeatherData
      data = {geoData}
      />
      </>
    }
    </>

    );
  }
  