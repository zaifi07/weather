import React from 'react'
    
export default function Test() {

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
   
  const utc = localTime + localOffset;
  const offset = -4 //to 
  const cityDate = utc + (3600000 * offset);
   
  const cityDateNow = new Date(cityDate)
  const nextDayDate = new Date(cityDateNow);
  const anotherNextDayDate = new Date(cityDateNow);

nextDayDate.setDate(cityDateNow.getDate() + 1);
const nextDay = nextDayDate.getDate();
const nextDayYear = nextDayDate.getFullYear();


anotherNextDayDate.setDate(cityDateNow.getDate() + 2);
const anotherNextDay = anotherNextDayDate.getDate();
const anotherNextDayYear = anotherNextDayDate.getFullYear();
const month=anotherNextDayDate.getMonth()+1;
const time=`${anotherNextDayYear}-${month}-${anotherNextDay}`
console.log("Next Day Date:", nextDay, anotherNextDayYear);
console.log("Another Next Day Date:", anotherNextDay, anotherNextDayYear);
console.log(time)




const dayName = daysOfWeek[cityDateNow.getDay()];
const monthName = months[cityDateNow.getMonth()];
const Day = cityDateNow.getDate();
const Year = cityDateNow.getFullYear();
let utcHours = cityDateNow.getHours()

let period = "AM";

if (utcHours >= 12) {
  period = "PM";
  utcHours %= 12;
}

if (utcHours === 0) {
  utcHours = 12;
}

const utcMinutes = cityDateNow.getMinutes();

const humanReadableTime=(`${dayName}, ${monthName} ${Day}, ${Year}, ${utcHours}:${utcMinutes.toString().padStart(2, '0')} ${period}`);
  
    return (
    <div>
    {humanReadableTime}
    </div>
  )
}
