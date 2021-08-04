import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { weatherServices} from "./../services/WeatherServices"

export default function Info() {

    let [cityName, setCityName] = useState ("London")

    const dispatch = useDispatch();

    const {weatherToday} = useSelector(state => state.WeatherReducer)


    const handleChange = (event) => {
        let {value} = event.target;
        setCityName(cityName = value)
    }

    useEffect(() => {
        weatherServices.getWeatherToday("london")
        .then(result => {
            // setCityName(cityName = result.data.name)
            dispatch({
                type: "GET_DATA_TODAY",
                weatherToday: result.data
            })
        })
        .catch(error => {
            console.log(error)

            let isError = true;

             setTimeout(() => {
                dispatch({
                    type: "ERROR",
                    isError: false
                })
            }, 3000);

            dispatch({
                type: "ERROR",
                isError
            })
        });

        weatherServices.getWeatherNextDays("london")
            .then(result => {
                dispatch({
                    type: "GET_DATA_NEXT_DAYS",
                    weatherNextDays: result.data
                })
            })
            .catch(error => {
                console.log(error)

                let isError = true;

                 setTimeout(() => {
                    dispatch({
                        type: "ERROR",
                        isError: false
                    })
            }, 3000);

                dispatch({
                    type: "ERROR",
                    isError
                })
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    const changeLocation = () => {
        document.querySelector("input").value = ''
        weatherServices.getWeatherToday(cityName)
        .then(result => {
            // setCityName(cityName = result.data.name)
            dispatch({
                type: "GET_DATA_TODAY",
                weatherToday: result.data
            })
        })
        .catch(error => {
            console.log(error)

            let isError = true;

             setTimeout(() => {
                dispatch({
                    type: "ERROR",
                    isError: false
                })
            }, 3000);

            dispatch({
                type: "ERROR",
                isError
            })


            weatherServices.getWeatherToday("London")
            .then(result => {
                // setCityName(cityName = result.data.name)
                dispatch({
                    type: "GET_DATA_TODAY",
                    weatherToday: result.data
                })
            })
            .catch(error => {
                console.log(error)
            });

        });

        weatherServices.getWeatherNextDays(cityName)
            .then(result => {
                dispatch({
                    type: "GET_DATA_NEXT_DAYS",
                    weatherNextDays: result.data
                })
            })
            .catch(error => {
                console.log(error)

                let isError = true;

                 setTimeout(() => {
                    dispatch({
                        type: "ERROR",
                        isError: false
                    })
                }, 3000);

                dispatch({
                    type: "ERROR",
                    isError
                })


                weatherServices.getWeatherNextDays("London")
            .then(result => {
                dispatch({
                    type: "GET_DATA_NEXT_DAYS",
                    weatherNextDays: result.data
                })
            })
            .catch(error => {
                console.log(error)
            })


            })

    }




    const renderInfor = () => {
    // EDIT DATE AND TIME

        const dateName = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"]

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


        const DATE = new Date(weatherToday.dt * 1000)
        const day = dateName[DATE.getDay()];
        const month = monthNames[DATE.getMonth()];
        const date = String(DATE.getDate()).padStart(2, '0');
        const year = DATE.getFullYear();
        const hour = String(DATE.getHours()).padStart(2, '0');
        const minute = String(DATE.getMinutes()).padStart(2, '0');
        const second = String(DATE.getSeconds()).padStart(2, '0');

        const outputDate = `${day} ${month} ${date}, ${year} ${hour}:${minute}:${second}`

        const src = `http://openweathermap.org/img/wn/${weatherToday.weather[0].icon}@2x.png`
        return (
            <div className="col-3 d-flex align-items-center justify-content-center h-100 w-100">
                <div className="text-center">
                    <div className="form-group d-flex align-items-center pb-5 mb-5 position-relative">
                        <input name= "cityName" className="form-control h-100" placeholder="Your City" onChange={handleChange}/>
                        <i className="fas fa-search-location position-absolute" onClick={changeLocation}/>
                    </div>
                    <h2 className="city">{weatherToday.name}</h2>
                    <div className="date text-muted">{outputDate}</div>
                    <div className="mb-5 pb-5">
                        <div className="temp  d-flex flex-column align-items-center justify-content-between">
                            <img src={src} width={150} alt="icon"/>
                            <h1>{Math.round(Number(weatherToday.main.temp) - 273.15)}<sup>&#176;C</sup></h1>
                        </div>
                        <h1 className="weather">{weatherToday.weather[0].main}</h1>
                    </div>
                    <div className="more-info d-flex justify-content-between">
                        <div className="humidity">
                            <h3 className="text-muted mb-5">Humidity</h3>
                            <h2 className="humi">{weatherToday.main.humidity}%</h2>
                        </div>
                        <div className="wind">
                            <h3 className="text-muted mb-5">Wind speed</h3>
                            <h2 className="windSpeed">{Math.round(weatherToday.wind.speed * 3.6)}km/h</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Fragment>
            {weatherToday ? renderInfor() : ''}
        </Fragment>
    )
}
