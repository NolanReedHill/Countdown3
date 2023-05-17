import React from 'react';
import Button from '@mui/material/Button'
import DateObject from 'react-date-object';
import HourlyInfo from './HourlyInfo';
import DailyInfo from './DailyInfo';
import News from './News';
export default function InfoData({data,  location}) {
    const imageUrl = "https://openweathermap.org/img/wn/"+data.current.weather[0].icon+"@2x.png";
    let timeStamp = data.current.dt*1000;
    const curTime = new DateObject(timeStamp);
    curTime.toUTC();
    const formatted = new DateObject((curTime.toUnix()*1000)+(data.timezone_offset*1000));

    function handleClick() {
        window.location.reload();
    }
    return (
        <>
        <div className= "refreshBox">
        <Button 
        variant="contained" 
        onClick={handleClick}
        className="refreshButton"
        >New Search</Button>
        </div>
        <h1>{location}</h1>
        <img src= {imageUrl}/>
        <h3>{data.current.weather[0].description}</h3>
        <h4>{formatted.format("dddd MMMM DD @ hh:mm a")} (Local Time)</h4>
        <h2>{Math.round(data.current.feels_like)}°F</h2>
        <h2>Hourly Forecast</h2>
        <div id= "scrollBox">
        <div id= "hourly">
        {data.hourly.slice(1,24).map((element,index) =>
        <HourlyInfo
        data= {element}
        timeOffset= {data.timezone_offset*1000}
        index= {index}
        />
        )}
        </div>
        </div>
        <h2>Daily Forecast</h2>
        <div id="daily">
            {data.daily.map((element,index) => 
            <DailyInfo
            data= {element}
            index= {index}
            timeOffset= {data.timezone_offset*1000}
            curDate= {formatted}
            />
            )}
        </div>

        <h1>Top News from New York Times</h1>
        <News/>
        </>
    );
}