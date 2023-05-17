import DateObject from 'react-date-object';
export default function DailyInfo({data,index, timeOffset, curDate}) {
    const imageUrl = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";

    let timeStamp = data.dt*1000;
    const curTime = new DateObject(timeStamp);
    curTime.toUTC();
    const formatted = new DateObject((curTime.toUnix()*1000)+(timeOffset));
    let day = formatted.format("dddd DD");
    if (day === curDate.format("dddd DD")) {
        day = "Today";
    }
    else {
        day = formatted.format("dddd");
    }
    return (
        <div className= "dailyInfo" id={"b"+index}>
        <img src= {imageUrl} className="pics"/>
        <h4 className="dayOfWeek">{day}</h4>
        <h4 className="dailyText">High: {Math.round(data.temp.max)}°F</h4>
        <h4 className="dailyText">Low: {Math.round(data.temp.min)}°F</h4>
        </div>
    );
}