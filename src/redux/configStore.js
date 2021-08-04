import { combineReducers, createStore } from "redux";

import { WeatherReducer } from "./reducers/WeatherReducer"

const rootReducer = combineReducers({
    WeatherReducer,
});

const store = createStore(rootReducer);

export default store;