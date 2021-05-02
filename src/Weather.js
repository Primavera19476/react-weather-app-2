import React from "react";
import './Weather.css';

export default function Weather () {
  return(
  <div className ="Weather">
    <form>
     <div className="row">
       <div className="col-9">
        <input className="form-control" type="Searchbar" placeholder="Enter a city" autoFocus="on"></input>
       </div>
       <div className="col-3">
        <input className="btn btn-warning w-100" type="Submit" value="Search"></input>
       </div>
      </div> 
    </form>
    <h1>Vienna, AT</h1>
    <ul>
      <li>Sunday, 19:00</li>
      <li>light rain</li>
    </ul>
  <div className="row">
    <div className="col-6">
      <div className="clearfix">
      <img className="float-left" src="http://openweathermap.org/img/wn/10d@2x.png" alt="raining"/>
      <div className="float-left">
      <span className="temperature">10</span>
      <span className="unit">°C</span>
      </div>
      </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Feelslike: 6°C</li>
        <li>Humidity: 71%</li>
        <li>Windspeed: 6 km/h</li>
    </ul>
    </div>
  </div>
  </div>)
}