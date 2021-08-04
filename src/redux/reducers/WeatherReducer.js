const initialState = {
    weatherToday: null,
    weatherNextDays: null,
    isError: false
}

export const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_DATA_TODAY": {

            let weatherTodayUpdate = {...state.weatherToday}
            weatherTodayUpdate = action.weatherToday;
            state.weatherToday = weatherTodayUpdate

            return { ...state}
        }


        case "GET_DATA_NEXT_DAYS": {
            let weatherNextDaysUpdate = {...state.weatherNextDays}
            weatherNextDaysUpdate = action.weatherNextDays;
            state.weatherNextDays = weatherNextDaysUpdate
            return { ...state}
        }

        case "ERROR": {
            state.isError = action.isError
            return { ...state}
        }

        default: {
            return { ...state}
        }
    }
}
