import React, { Component } from 'react'
import './weather.css';
import axios from 'axios'



export default function Weather() {
    return (
        <>
            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">Tuesday</h2><span className="date-day">15 Jan 2019</span><i className="location-icon" data-feather="map-pin"></i><span className="location">Paris, FR</span>
                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">29°C</h1>
                        <h3 className="weather-desc">Sunny</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div> <span className="title">PREDICTABILITY</span><span className="value">0 %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="precipitation"> <span className="title">HUMIDITY</span><span className="value">0 %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">WIND</span><span className="value">34 %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">AIR PRESSURE</span><span className="value">0 km/h</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">UV INDEX</span><span className="value">0 km/h</span>
                                <div className="clear"></div>
                            </div>

                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            <li className="day-icon"><i className="day-icon" data-feather="sun"></i><span className="day-name">Monday</span><span className="day-temp">29°C</span></li>
                            <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Tuesday</span><span className="day-temp">21°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Wednesday</span><span className="day-temp">08°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Thursday</span><span className="day-temp">19°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Friday</span><span className="day-temp">19°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Saturday</span><span className="day-temp">19°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Sunday</span><span className="day-temp">19°C</span></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                    {/* <div className="location-container"><button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button></div> */}
                </div>
            </div>
        </>
    )
}
