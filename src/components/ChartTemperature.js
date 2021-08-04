import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Chart from "react-apexcharts";

export default function ChartTemperature() {

    const { weatherNextDays } = useSelector(state => state.WeatherReducer)



    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];





    let mangdate = [];
    let mangWeather = [];
    let mangTemp = [];


    if (weatherNextDays) {

        weatherNextDays.list.map((weather, index) => {
            if (weather.dt_txt.slice(11) === "12:00:00") {
                // PUSH DATE
                const DATE = new Date(weather.dt_txt)
                const date = String(DATE.getDate()).padStart(2, '0');
                const monthLetter = monthNames[DATE.getMonth()]
                const dateText = `${date} ${monthLetter}`
                mangdate.push(dateText)


                // PUSH MANG WEATHER
                mangWeather.push(weather)

                // PUSH TEMP VALUE
                mangTemp.push(Math.round(Number(weather.main.temp) - 273.15))
            }

            return  mangdate;

        });

    }


    let series = [
        {
            name: "TEMPERATURE",
            data: mangTemp
        }
    ]


    let options = {
        // chart: {
        //   id: "basic-bar"
        // },
        xaxis: {
            categories: mangdate
        },
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Unit: °C',
            align: 'left'
        },
        subtitle: {
            text: 'Comparison data at 12:00:00 on each day',
            align: 'left'
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'right'
        },

        colors: ['#2E93fA']
    };


    return (
        <Fragment>
            { weatherNextDays ? <Chart
                options={options}
                series={series}
                height={350}
            /> : ""}
        </Fragment>
    )
}
