import React from 'react';
import DateObject from 'react-date-object';
export default function HourlyInfo({data, timeOffset,index}) {
    const imageUrl = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    let timeStamp = data.dt*1000;
    const curTime = new DateObject(timeStamp);
    curTime.toUTC();
    const formatted = new DateObject((curTime.toUnix()*1000)+(timeOffset));
    const hour = formatted.format("hh a");
return (
    <div className= "hourlyInfo" 
     id= {"a"+index}>
    <img src={imageUrl}/>
    <h4>{hour}</h4>
    <h5>{Math.round(data.feels_like)}°F</h5>
    </div>

)
}