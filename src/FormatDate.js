import React from "react";

export default function FormatDate (props) {
  console.log(props.timestamp);
  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friyay",
    "Saturday"
  ];
  let day = daysOfTheWeek[props.timestamp.getDay()];
  let hours = props.timestamp.getHours();
  let minutes = props.timestamp.getMinutes();
  if (hours < 10) {hours = `0${hours}`};
  if (minutes < 10) {minutes = `0${minutes}`};
  return (
    <div>
      {day}, {hours}:{minutes}
    </div>
  )
}