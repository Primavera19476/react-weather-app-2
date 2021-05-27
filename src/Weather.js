import React, { useState } from "react";
import './Weather.css';
import FormatDate from "./FormatDate";
import axios from "axios";

export default function Weather (props) {
  const [weatherData, setWeatherData] =useState({ ready: false});

  function handleResponse (response) {
    setWeatherData ({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      timestamp: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconURL: "https://openweathermap.org/img/wn/10d@2x.png",
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      Humidity: response.data.main.humidity,
      Windspeed: response.data.wind.speed,
    });
  }
  
  if (weatherData.ready) {
  return(
  <div className ="Weather">
    <form>
     <div className="row">
       <div className="col-9">
        <input className="form-control" type="Searchbar" placeholder="Enter a city" autoFocus="on"></input>
       </div>
       <div className="col-3">
        <input className="btn btn-warning w-100" type="Submit" value="Search"></input>
       </div>      </div> 
    </form>
    <h1>{weatherData.city}, {weatherData.country}</h1>
    <ul>
      <li>
        <FormatDate timestamp ={weatherData.timestamp} />
      </li>
      <li className="text-capitalize">{weatherData.description}</li>
    </ul>
  <div className="row">
    <div className="col-6">
      <div className="clearfix">
      <img className="float-left" src={weatherData.iconURL} alt={weatherData.description}/>
      <div className="float-left">
      <span className="temperature">{Math.round(weatherData.temperature)}</span>
      <span className="unit">°C</span>
      </div>
      </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
        <li>Humidity: {weatherData.Humidity}%</li>
        <li>Windspeed: {(weatherData.Windspeed*3,6)} km/h</li>
    </ul>
    </div>
  </div>
  </div>);
  } else {
  let apiKey = "e43b0a6cd655b887c6853a81917a0cda";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return ("Page Loading...");
  }
}