import React from "react";
import { css } from './index.css'
export default function App() {


  const [data, setData] = React.useState()
  const [city, setCity] = React.useState("islamabad")
  const [isOnline, setIsOnline] = React.useState(window.navigator.onLine);
  function search() {
    setCity(document.getElementById('city').value)
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (!navigator.onLine) {
          alert('No internet connection. Please check your internet settings.');
          return;
        }
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=57782102aaf0157a0365df843b0d203b&units=metric`);
        const jsonData = await response.json();
        if (jsonData.cod === '404') {
          setData(null);
        } else {
          setData(jsonData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [city,isOnline]);


  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };
      console.log("Efecrt")
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);






  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const offset = (data?.city.timezone) / 3600 ?? 0
  const cityDate = utc + (3600000 * offset);
  const cityDateNow = new Date(cityDate)
  const dayName = daysOfWeek[cityDateNow.getDay()];
  const monthName = months[cityDateNow.getMonth()];
  const Day = cityDateNow.getDate();
  const Year = cityDateNow.getFullYear();
  let utcHours = cityDateNow.getHours()
  let Hours = cityDateNow.getHours()
  const utcMinutes = cityDateNow.getMinutes();
  let period = "AM";

  if (utcHours >= 12) {
    period = "PM";
    utcHours %= 12;
  }
  if (utcHours === 0) {
    utcHours = 12;
  }
  const humanReadableTime = (`${dayName}, ${monthName} ${Day}, ${Year}, ${utcHours}:${utcMinutes.toString().padStart(2, '0')} ${period}`);


  const currentMonth = cityDateNow.getMonth() + 1;
  const currentDay = cityDateNow.getDate()
  const currentDate = `${Year}-${currentMonth > 9 ? currentMonth : 0 + currentMonth.toString()}-${currentDay > 9 ? currentDay : 0 + currentDay.toString()}`;

  const day2 = new Date(cityDateNow);
  day2.setDate(cityDateNow.getDate() + 1);
  const day2Day = daysOfWeek[day2.getDay()];
  const day2Month = day2.getMonth() + 1;
  const day2Date = day2.getDate();
  const day2Year = day2.getFullYear();
  const dayTwoDate = `${day2Year}-${day2Month > 9 ? day2Month : 0 + day2Month.toString()}-${day2Date > 9 ? day2Date : 0 + day2Date.toString()}`


  const day3 = new Date(cityDateNow);
  day3.setDate(cityDateNow.getDate() + 2);
  const day3Day = daysOfWeek[day3.getDay()];
  const day3Month = day3.getMonth() + 1
  const day3Date = day3.getDate()
  const day3Year = day3.getFullYear()
  const dayThreeDate = `${day3Year}-${day3Month > 9 ? day3Month : 0 + day3Month.toString()}-${day3Date > 9 ? day3Date : 0 + day3Date.toString()}`



  const day4 = new Date(cityDateNow);
  day4.setDate(cityDateNow.getDate() + 3);
  const day4Day = daysOfWeek[day4.getDay()];
  const day4Month = day4.getMonth() + 1
  const day4Date = day4.getDate()
  const day4Year = day4.getFullYear()
  const dayFourDate = `${day4Year}-${day4Month > 9 ? day4Month : 0 + day4Month.toString()}-${day4Date > 9 ? day4Date : 0 + day4Date.toString()}`


  const day5 = new Date(cityDateNow);
  day5.setDate(cityDateNow.getDate() + 4);
  const day5Day = daysOfWeek[day5.getDay()];
  const day5Month = day5.getMonth() + 1
  const day5Date = day5.getDate()
  const day5Year = day5.getFullYear()
  const dayFiveDate = `${day5Year}-${day5Month > 9 ? day5Month : 0 + day5Month.toString()}-${day5Date > 9 ? day5Date : 0 + day5Date.toString()}`


  var min, max, day1_data, res;
  if (data != null) {
    day1_data = data.list.filter(ele => ele.dt_txt.startsWith(currentDate))
    min = day1_data[0].main.temp_min
    max = day1_data[0].main.temp_max
    res = day1_data.map(ele => {
      if (ele.main.temp_min < min) {
        min = ele.main.temp_min
      }
      if (ele.main.temp_max > max) {
        max = ele.main.temp_max
      }
    })
  }


  var min2, max2, day2_data, res2;
  if (data != null) {
    day2_data = data.list.filter(ele => ele.dt_txt.startsWith(dayTwoDate))
    min2 = day2_data[0].main.temp_min
    max2 = day2_data[0].main.temp_max
    res2 = day2_data.map(ele => {
      if (ele.main.temp_min < min2) {
        min2 = ele.main.temp_min
      }
      if (ele.main.temp_max > max2) {
        max2 = ele.main.temp_max
      }
    })
  }


  var min3, max3, day3_data, res3;
  if (data != null) {
    day3_data = data.list.filter(ele => ele.dt_txt.startsWith(dayThreeDate))
    min3 = day3_data[0].main.temp_min
    max3 = day3_data[0].main.temp_max
    res3 = day3_data.map(ele => {
      if (ele.main.temp_min < min3) {
        min3 = ele.main.temp_min
      }
      if (ele.main.temp_max > max3) {
        max3 = ele.main.temp_max
      }
    })
    console.log(day3_data)
  }


  var min4, max4, day4_data, res4;
  if (data != null) {
    day4_data = data.list.filter(ele => ele.dt_txt.startsWith(dayFourDate))
    min4 = day4_data[0].main.temp_min
    max4 = day4_data[0].main.temp_max
    res4 = day4_data.map(ele => {
      if (ele.main.temp_min < min4) {
        min4 = ele.main.temp_min
      }
      if (ele.main.temp_max > max4) {
        max4 = ele.main.temp_max
      }
    })
  }



  var min5, max5, day5_data, res5;
  if (data != null) {
    day5_data = data.list.filter(ele => ele.dt_txt.startsWith(dayFiveDate))
    min5 = day5_data[0].main.temp_min
    max5 = day5_data[0].main.temp_max
    res5 = day5_data.map(ele => {
      if (ele.main.temp_min < min5) {
        min5 = ele.main.temp_min
      }
      if (ele.main.temp_max > max5) {
        max5 = ele.main.temp_max
      }
    })
  }



  var rightNow = 0;
  if (day1_data != null) {
    for (let i = 0; i < day1_data.length; i++) {
      if (Hours <= parseInt(day1_data[i].dt_txt.split(' ')[1].split(':')[0])) {
        rightNow = i
        break
      }
    }
  }

  var bgcImg="clear-day"
  if(Hours)
  console.log(Hours)
  if(data!=null){
    if(day1_data[rightNow].weather[0].main.toLowerCase()=="rain"){
      bgcImg='rain'
    }
    else if(day1_data[rightNow].weather[0].main.toLowerCase()=="thunderstorm" || day1_data[rightNow].weather[0].main.toLowerCase()=="extreme" ){
      bgcImg='thunder'
    }
    else if(day1_data[rightNow].weather[0].main.toLowerCase()=="snow"){
      bgcImg='snow'
    }
    else if(day1_data[rightNow].weather[0].main.toLowerCase()=="mist"){
      bgcImg='fog'
    }
    else if(day1_data[rightNow].weather[0].description.toLowerCase()=="overcast clouds" ){
      if(Hours<20){
        bgcImg='cloudy'
      }
      else{
        bgcImg='cloudy-night'
      }
    }
    else if((day1_data[rightNow].weather[0].main.toLowerCase()=="clear" || day1_data[rightNow].weather[0].main.toLowerCase()=="clouds") && (Hours>=6 && Hours<=10) ){
      bgcImg='morning1'
    }
    else if(day1_data[rightNow].weather[0].main.toLowerCase()=="clear"  && (Hours>=20) ){
      bgcImg='night'
    }
    else if((day1_data[rightNow].weather[0].main.toLowerCase()=="clear" || day1_data[rightNow].weather[0].main.toLowerCase()=="clouds") && (Hours>=15 && Hours<20) ){
      bgcImg='evening'
    }
  
    else if(day1_data[rightNow].weather[0].main.toLowerCase()=="clouds" && (Hours<15 && Hours>10) ){
      bgcImg='cloudy-noon'
    }
    else if(Hours>=20 || Hours<=6){
      bgcImg='night-sky'
    }    
  }


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
     search()
    }
  }
  

  const tempNow = day1_data?.[rightNow].main.temp ?? 'Temperature' //for last  row

  return (
    <div className="container">
      <div className='wrapper'>

        <div className="first-row rows">
          <p>Weather Dashboard</p>
          <p>{isOnline?Year:"Year"}</p>
        </div>


        <div className="weather-dashboard">
          <img src={`Media/${bgcImg}.jpg`} />
          <div className="weather-card">
            <div className="left-card">
              <p>Internaitional Weather</p>
              <div className="user">
                <i className="fa-solid fa-temperature-low"></i>
                <input type="text" placeholder="Enter city" id="city" onKeyDown={handleKeyPress} />
                <i className="fa-solid fa-magnifying-glass-location" onClick={search}></i>
              </div>


              {data? 
              <div className="fore-cast-box">
                <div className="fore-cast">
                  <p>{day2Day?.slice(0, 3) ?? "Day"}</p>
                  <div className="fore-cast-des">
                    <img src={`https://openweathermap.org/img/wn/${day2_data != null ? day2_data[4].weather[0].icon : "01d"}.png`} />
                    <p className="des">{day2_data != null ? day2_data[4].weather[0].main : "Dsrp"}</p>
                  </div>
                  <p>{`${max2 !== null ? Math.floor(max2) : 0}°/${min2 !== null ? Math.floor(min2) : 0}°`}</p>
                </div>
                <div className="fore-cast">
                  <p>{day3Day?.slice(0, 3) ?? "Day"}</p>
                  <div className="fore-cast-des">
                    <img src={`https://openweathermap.org/img/wn/${day3_data != null ? day3_data[4].weather[0].icon : "01d"}.png`} />
                    <p className="des">{day3_data != null ? day3_data[4].weather[0].main : "Dsrp"}</p>
                  </div>
                  <p>{`${max3 !== null ? Math.floor(max3) : 0}°/${min3 !== null ? Math.floor(min3) : 0}°`}</p>
                </div>
                <div className="fore-cast">
                  <p>{day4Day?.slice(0, 3) ?? "Day"}</p>
                  <div className="fore-cast-des">
                    <img src={`https://openweathermap.org/img/wn/${day3_data ? day3_data[4].weather[0].icon : "01d"}.png`} />
                    <p className="des">{day4_data != null ? day4_data[0].weather[0].main : "Dsrp"}</p>
                  </div>
                  <p>{`${max4 !== null ? Math.floor(max4) : 0}°/${min4 !== null ? Math.floor(min4) : 0}°`}</p>
                </div>
                <div className="fore-cast">
                  <p>{day5Day?.slice(0, 3) ?? "Day"}</p>
                  <div className="fore-cast-des">
                    <img src={`https://openweathermap.org/img/wn/${day5_data ? day5_data[0].weather[0].icon : "01d"}.png`} />
                    <p className="des">{day5_data != null ? day5_data[0].weather[0].main : "Dsrp"}</p>
                  </div>
                  <p>{`${max5 !== null ? Math.floor(max5) : 0}°/${min5 !== null ? Math.floor(min5) : 0}°`}</p>
                </div>
              </div>  :"No record"}
            </div>
            {data?
            <div className="right-card">
              <p>Weather Forcast</p>
              <div className="temp">
                <h1>{data?.city.name ?? 'City'} </h1>
                <sub className="country">( {data?.city.country ?? 'Country'} )</sub>
                <p>(Today)</p>
                <img src={`https://openweathermap.org/img/wn/${day1_data?.[rightNow].weather[0].icon ?? "01d"}@2x.png`} />
                <h1>{day1_data?.[rightNow].main.temp ?? 'Temperature'}&deg;</h1>
                <p>Feels Like {day1_data?.[rightNow].main.feels_like ?? ""}</p>
                <h1>{day1_data?.[rightNow].weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') ?? "Weather Discription"}</h1>
              </div>
              <div className="right-details">
                <div className="right-info">
                  <span className="material-symbols-outlined">schedule</span><p>{humanReadableTime}</p>
                </div>
                <div className="right-info">
                  <span className="material-symbols-outlined">air</span><p>Winds moving at {day1_data?.[rightNow].wind.speed ?? ""} mph.</p>
                </div>
                <div className="right-info">
                  <span className="material-symbols-outlined">compare_arrows</span><p>The Atmospheric Pressure is {day1_data?.[rightNow].main.pressure * 100 ?? ""} pa or {((day1_data?.[rightNow].main.pressure * 100) / 101325).toFixed(2) ?? ""}(atm)</p>
                </div>
                <div className="right-info">
                  <span className="material-symbols-outlined">device_thermostat</span><p>Min Temperature: {min != null ? min : "Temperature"} & Max Temperature: {max != null ? max : "Temperature"}</p>
                </div>
              </div>
            </div> :
            <div className="no-data">
              <p>City is Not Found.</p>
              <p>If you have entered the correct city, please verify your internet connection.</p>
            </div>
            }
          </div>
        </div>

        <div className="last-row rows">
          <p>{isOnline?Math.floor(tempNow):"Temperature"}&deg;</p>
          <p>{data?.city.name ?? ''} City Weather</p>
        </div>
      </div>
    </div>
  )
}