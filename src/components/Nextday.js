import React from 'react';
import { useSelector } from 'react-redux';


export default function Nextday() {
    const { weatherNextDays } = useSelector(state => state.WeatherReducer)

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let mangWeather = [];






    if (weatherNextDays) {

        weatherNextDays.list.map((weather, index) => {
            if (weather.dt_txt.slice(11) === weatherNextDays.list[0].dt_txt.slice(11)) {
                mangWeather.push(weather)

            }
            return mangWeather;

        });

    }


    const renderNextday = () => {
        return mangWeather.map((weather, index) => {
            const DATE = new Date(weather.dt_txt)
            const date = String(DATE.getDate()).padStart(2, '0');
            const monthLetter = monthNames[DATE.getMonth()]
            const dateText = `${date} ${monthLetter}`

            const src =`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

            return (
                <div className={index===0 ? "item today glass text-center" : "item glass text-center"} key={index}>
                    <h3 className="change-date">{index===0 ? "Today" : dateText}</h3>
                    <h3 className="my-4">
                        <img src={src} width="50px" alt="icon" />
                    </h3>
                    <h3 className="mb-3">Temperature</h3>
                    <h2>{Math.round(Number(weather.main.temp) - 273.15)}<sup>°C</sup></h2>
                </div>
            )
        })

    }

    return (
        <div className="next-day">
            {weatherNextDays ? renderNextday() : ''}
        </div>
    )
}
