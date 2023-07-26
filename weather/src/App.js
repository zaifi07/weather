import React from "react";
import {css} from './index.css'
export default function App(){
  const [data,setData]=React.useState()


  const now = new Date();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayName = daysOfWeek[now.getUTCDay()];
const monthName = months[now.getUTCMonth()];
const utcDay = now.getUTCDate();
const utcYear = now.getUTCFullYear();
const utcHoursI=now.getUTCHours();
let utcHours = utcHoursI+(18000/3600)
// console.log(data.list[0].wind.speed)

let period = "AM";

if (utcHours >= 12) {
  period = "PM";
  utcHours %= 12;
}

if (utcHours === 0) {
  utcHours = 12;
}

const utcMinutes = now.getUTCMinutes();

const humanReadableTime=(`${dayName}, ${monthName} ${utcDay}, ${utcYear}, ${utcHours}:${utcMinutes.toString().padStart(2, '0')} ${period}`);



  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=multan&appid=57782102aaf0157a0365df843b0d203b&units=metric');
        const jsonData = await response.json();
        setData(jsonData)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  
  return(
    <div className="wraper">
      <div className="first-row rows">
          <p>Weather Dashboard</p>
          <p>2023</p>
      </div>





      <div className="weather-dashboard">
          <img src="Media/clear-day.jpg"/>
          <div className="weather-card">




              <div className="left-card">
                  <p>Internaitional</p>
                  <p>Weather</p>
                  <div className="user">
                    <i className="fa-solid fa-temperature-low"></i>
                    <input type="text" placeholder="Enter city" />
                    <i className="fa-solid fa-magnifying-glass-location"></i>
                  </div>


                    <div className="fore-cast-box">
                      <div className="fore-cast">
                        <p>Tomorrow</p>
                        <img src="https://openweathermap.org/img/wn/10d@2x.png"/>
                        <p>15&deg;C</p>
                      </div>
                      <div className="fore-cast">
                        <p>Wednesday</p>
                        <img src="https://openweathermap.org/img/wn/11d@2x.png"/>
                        <p>15&deg;C</p>
                      </div>
                      <div className="fore-cast">
                        <p>Thursday</p>
                        <img src="https://openweathermap.org/img/wn/01d@2x.png"/>
                        <p>25&deg;C</p>
                      </div>
                      <div className="fore-cast">
                        <p>Friday</p>
                        <img src="https://openweathermap.org/img/wn/13d@2x.png"/>
                        <p>11&deg;C</p>
                      </div>
                      <div className="fore-cast">
                        <p>Saturday</p>
                        <img src="https://openweathermap.org/img/wn/50d@2x.png"/>
                        <p>15&deg;C</p>
                      </div>
                    </div>
              </div>




              <div className="right-card">
                <p>Weather Forcast</p>
                  <div className="temp">
                    <h1>{data!=null?data.city.name:'City'}</h1>
                    <img src={`https://openweathermap.org/img/wn/${data!=null?data.list[0].weather[0].icon:"01d"}@2x.png`} />
                    <h1>{data!=null?data.list[0].main.temp:'City'}&deg;</h1>
                    <p>Feels Like {data!=null?data.list[0].main.feels_like:""}</p>
                    <h1>{data!=null?data.list[0].weather[0].main:"Weather Discription"}</h1>
                  </div>
                  <div className="right-details">
                      <div className="right-info">
                        <span class="material-symbols-outlined">schedule</span><p>{humanReadableTime}</p>
                      </div>
                      <div className="right-info">
                      <span class="material-symbols-outlined">air</span><p>Winds at {data!=null?data.list[0].wind.speed:""} mph.</p>
                      </div>
                      <div className="right-info">
                        <span class="material-symbols-outlined">compare_arrows</span><p>The Atmospheric Pressure is {data!=null?data.list[0].main.pressure*100:""} pa or {data!=null?((data.list[0].main.pressure*100)/101325).toFixed(2):""}(atm)</p>
                      </div>
                      <div className="right-info">
                      <span class="material-symbols-outlined">device_thermostat</span><p>Min Temperature: {data!=null?data.list[0].main.temp_min:""} & Max Temperature: {data!=null?data.list[0].main.temp_max:""}</p>
                      </div>
                  
                  
                  </div>
              </div>
          </div>
      </div>

      <div className="last-row rows">
            <p>17 C</p>
            <p>Lahore City Weather</p>
      </div> 
    </div>
  )
}
