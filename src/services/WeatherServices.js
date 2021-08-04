import Axios from "axios";

export class WeatherServices {
    // GET API NOW
    getWeatherToday = (city) => {
        const newName = city.toLowerCase().replace("city", "").trim();
        return Axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${newName}&appid=286320007709e99a9a1d0b0b273321c8`,
            method: "GET"
        })
    };

    // GET API NEXT DAYS
    getWeatherNextDays = (city) => {
        const newName = city.toLowerCase().replace("city", "").trim();
        return Axios({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${newName}&appid=286320007709e99a9a1d0b0b273321c8`,
            method: "GET"
        })
    };
}

export const weatherServices = new WeatherServices();
