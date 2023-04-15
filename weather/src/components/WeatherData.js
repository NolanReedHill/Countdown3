import {useState, useEffect} from 'react';
export default function WeatherData({data}) {
    //console.log(data);
    //creating useState
    // const [weatherData, setWeatherData] = useState([]);
    // //creating url
    // const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    // url.searchParams.append("lat",data[0].lat)
    // url.searchParams.append("lon",data[0].lon)
    // url.searchParams.append("appid","8eab36113a8ca510a047d789045f2898");
    // //fetching weatherdata
    // useEffect(() => {
    //   fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => setWeatherData(data))
    //   .catch((error) => console.log("Error:",error))
    // }, [])
    // console.log(weatherData);
    return (
        <>
        <h2>Your Latitude: {data[0].lat} </h2>
        <h3>Your Longitude: {data[0].lon}</h3>


        </>
    );
}