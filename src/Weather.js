import React, { Component } from 'react'
import './weather.css';
import axios from 'axios'
import { useState } from 'react'



export default function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');
    const API_KEY = 'ecf490a8a6d9db6fa6006bca60716e27'
    const day = new Date()
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const fullDate = month[day.getUTCMonth()] + ' ' + day.getDate() + ', ' + day.getFullYear()
    const dayNext = (days) => {
        return(
            month[day.getUTCMonth()] + ' ' + (day.getDate() + days)
        )
    }
    
    const getWeatherData = async (event) => {

        event.preventDefault()
        const cityInput = event.target.elements.cityInput.value
        const API_REQUEST = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${API_KEY}`
        const req = axios.get(API_REQUEST);
        const res = await req;

        setWeather({
            weather: res.data,
            temp: res.data.list[0].main.temp,
            city: res.data.city.name,
            humidity: res.data.list[0].main.humidity,
            wind: res.data.list[0].wind.speed,
            pressure: res.data.list[0].main.pressure,
            describe: res.data.list[0].weather[0].main,
            maxTemp: res.data.list[0].main.temp_max,
            minTemp: res.data.list[0].main.temp_min,
            tempTwo: res.data.list[8].main.temp,
            tempThree: res.data.list[16].main.temp,
            tempFour: res.data.list[24].main.temp,
            tempFive: res.data.list[32].main.temp,
            iconOne: res.data.list[0].weather[0].icon,
            iconTwo: res.data.list[8].weather[0].icon,
            iconThree: res.data.list[16].weather[0].icon,
            iconFour: res.data.list[24].weather[0].icon,
            iconFive: res.data.list[32].weather[0].icon,
        })

        setCity(res.data.name)
    }

    return (
        <>
            <form className="form__group field" onSubmit={getWeatherData}>
                <input type="text" className="form__field" placeholder="Change City" name='cityInput'/>
                <label className="form__label">Change City</label>
            </form>
            <br/>
            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h1 className="date-dayname">{weather.city}</h1><span className="date-day">{day.toLocaleDateString('en-us', { weekday: 'long' })}</span><span className="date-day">{fullDate}</span>
                    </div>
                    <div className="weather-container"><img style={{ width: 170, height: 150, margin:-30, padding: 0 }} src={`http://openweathermap.org/img/wn/${weather.iconOne}.png`} alt="Weather icon" />
                        <h1 className="weather-temp">{(weather.temp - 273.15).toFixed(2)}&#8451;</h1>
                        <h3 className="weather-desc">{weather.describe}</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className='pressure'>
                                <span className="title">PRESSURE</span>
                                <span className="value">{weather.pressure} hPa</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity">
                                <span className="title">HUMIDITY</span>
                                <span className="value">{weather.humidity} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="speed">
                                <span className="title">WIND SPEED</span>
                                <span className="value">{weather.wind} meter/sec</span>
                                <div className="clear"></div>
                            </div>
                            <div className="high">
                                <span className="title">HIGHEST TEMPERATURE</span>
                                <span className="value">{(weather.maxTemp - 273.15).toFixed(2)}&#8451;</span>
                                <div className="clear"></div>
                            </div>
                            <div className="low">
                                <span className="title">LOWEST TEMPERATURE</span>
                                <span className="value">{(weather.minTemp - 273.15).toFixed(2)}&#8451;</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                
                    <div className="week-container">
                        <ul className="week-list">
                            <li>
                                <img src={`http://openweathermap.org/img/wn/${weather.iconOne}.png`} alt="Day One Icon"/>
                                <span className="day-name">{dayNext(0)}</span>
                                <span className="day-temp">{(weather.temp - 273.15).toFixed(2)}&#8451;</span>
                            </li>
                            <li>
                                <img src={`http://openweathermap.org/img/wn/${weather.iconTwo}.png`} alt="Day Two Icon"/>
                                <span className="day-name">{dayNext(1)}</span>
                                <span className="day-temp">{(weather.tempTwo - 273.15).toFixed(2)}&#8451;</span>
                            </li>
                            <li>
                                <img src={`http://openweathermap.org/img/wn/${weather.iconThree}.png`} alt="Day Three Icon"/>
                                <span className="day-name">{dayNext(2)}</span>
                                <span className="day-temp">{(weather.tempThree - 273.15).toFixed(2)}&#8451;</span>
                            </li>
                            <li>
                                <img src={`http://openweathermap.org/img/wn/${weather.iconFour}.png`} alt="Day Four Icon"/>
                                <span className="day-name">{dayNext(3)}</span>
                                <span className="day-temp">{(weather.tempFour - 273.15).toFixed(2)}&#8451;</span>
                            </li>
                            <li>
                                <img src={`http://openweathermap.org/img/wn/${weather.iconFive}.png`} alt="Day Five Icon"/>
                                <span className="day-name">{dayNext(4)}</span>
                                <span className="day-temp">{(weather.tempFive - 273.15).toFixed(2)}&#8451;</span>
                            </li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
