import React from 'react';
import DateObject from 'react-date-object';
export default function InfoData({data,  location}) {
    const imageUrl = "https://openweathermap.org/img/wn/"+data.current.weather[0].icon+"@2x.png";
    let timeStamp = data.current.dt*1000;
    const curTime = new DateObject(timeStamp);
    console.log(data);
    curTime.toUTC();
    const formatted = new DateObject((curTime.toUnix()*1000)+(data.timezone_offset*1000));
    return (
        <>
        <h1>{location}</h1>
        <img src= {imageUrl}/>
        <h4>{formatted.format("dddd MMMM DD @ hh:mm a")} (Local Time)</h4>
        <h3>{data.current.weather[0].description}</h3>
        <h2>{Math.round(data.current.feels_like)}°F</h2>
        </>
    );
}