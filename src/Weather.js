import React, { Component } from 'react'
import './weather.css';
import axios from 'axios'
import { useState } from 'react'


export default function Weather() {
    const [city, setCity] = useState('');
    const [weather, SetWeather] = useState('');
    const API_KEY = 'ecf490a8a6d9db6fa6006bca60716e27'
    const day = new Date()
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const fullDate = month[day.getUTCMonth()] + ' ' + day.getDate() + ', ' + day.getFullYear()
    const dayOne = month[day.getUTCMonth()] + ' ' + day.getDate()
    const dayTwo = month[day.getUTCMonth()] + ' ' + (day.getDate() + 1)
    const dayThree = month[day.getUTCMonth()] + ' ' + (day.getDate() + 2)
    const dayFour = month[day.getUTCMonth()] + ' ' + (day.getDate() + 3)
    const dayFive = month[day.getUTCMonth()] + ' ' + (day.getDate() + 4)

    return (
        <>
            <form className="form__group field">
                <input type="text" className="form__field" placeholder="Change City" onChange={(event) => this.readCity(event)}/>
                <label className="form__label">Change City</label>
                <button onClick={this.getCity} className="bttn" type='submit'>Search</button>
            </form>
            <br></br>
            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h1 className="date-dayname">{this.state.city}</h1><span className="date-day">{day.toLocaleDateString('en-us', { weekday: 'long' })}</span><span className="date-day">{fullDate}</span>
                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>

                        <h1 className="weather-temp">{(this.state.temp - 273.15).toFixed(2)}&#8451;</h1>
                        <h3 className="weather-desc">Sunny</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div> <span className="title">PRESSURE</span><span className="value">{this.state.pressure} hPa</span>
                                <div className="clear"></div>
                            </div>
                            <div className="precipitation"> <span className="title">HUMIDITY</span><span className="value">{this.state.humidity} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">WIND SPEED</span><span className="value">{this.state.wind} meter/sec</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">HIGHEST TEMPERATURE</span><span className="value">{(this.state.maxTemp - 273.15).toFixed(2)}&#8451;</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">LOWEST TEMPERATURE</span><span className="value">{(this.state.minTemp - 273.15).toFixed(2)}&#8451;</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            <li><img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Weather icon" /><span className="day-name">{dayOne}</span><span className="day-temp">{(this.state.temp - 273.15).toFixed(2)}&#8451;</span></li>
                            <li><img src="http://openweathermap.org/img/wn/11d@2x.png" alt="Weather icon" /><span className="day-name">{dayTwo}</span><span className="day-temp">{(this.state.tempTwo - 273.15).toFixed(2)}&#8451;</span></li>
                            <li><img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Weather icon" /><span className="day-name">{dayThree}</span><span className="day-temp">{(this.state.tempThree - 273.15).toFixed(2)}&#8451;</span></li>
                            <li><img src="http://openweathermap.org/img/wn/02d@2x.png" alt="Weather icon" /><span className="day-name">{dayFour}</span><span className="day-temp">{(this.state.tempFour - 273.15).toFixed(2)}&#8451;</span></li>
                            <li><img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon" /><span className="day-name">{dayFive}</span><span className="day-temp">{(this.state.tempFive - 273.15).toFixed(2)}&#8451;</span></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
