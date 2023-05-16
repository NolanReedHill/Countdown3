import {useState, useEffect} from 'react';
import Info from './InfoData.js';
export default function WeatherData({data}) {
    const [weatherData, setWeatherData] = useState([]);
    const url = new URL("https://api.openweathermap.org/data/3.0/onecall");
    url.searchParams.append("lat",data[0].lat);
    url.searchParams.append("lon",data[0].lon);
    url.searchParams.append("appid","8eab36113a8ca510a047d789045f2898");
    url.searchParams.append("units","imperial");
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.log("Error:",error))
      }, [])
    return (
        <>
        {weatherData.length === 0? <h1>Loading</h1> : 
            <Info 
            data= {weatherData}
            location= {data[0].name}
            />
        }
        </>
    );
}