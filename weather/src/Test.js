import React from 'react'

export default function Test() {
// Get the current UTC time
const now = new Date();

const utcYear = now.getUTCFullYear();
const utcMonth = now.getUTCMonth() + 1; // Months are zero-based, so add 1
const utcDay = now.getUTCDate();
const utcHours = now.getUTCHours();
const updatedHours=utcHours+(18000/3600)
const utcMinutes = now.getUTCMinutes();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[now.getUTCDay()];

const humanReadableTime=`Current UTC Time: ${utcYear}-${utcMonth}-${utcDay} ${updatedHours}:${utcMinutes} and ${dayName}`

  return (
    <div>
      {humanReadableTime}
    </div>
  )
}
