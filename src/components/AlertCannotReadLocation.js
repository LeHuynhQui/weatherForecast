import React from 'react'
import { useSelector } from 'react-redux';

export default function AlertCannotReadLocation() {
    let { isAllow } = useSelector(state => state.WeatherReducer)

    const render = () => {
        return (
            <div className={isAllow ? "alert-error alert-warning show" : "alert-error alert-warning"}>
                <h3 className="m-0"><i className="far fa-times-circle" /> Can not read your location. The dafault location should be <b>London</b></h3>
            </div>
        )
    }

    return (
        <div>
            {isAllow ? render() : ""}
        </div>
    )
}