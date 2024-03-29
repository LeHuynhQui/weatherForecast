import React from 'react'
import { useSelector } from 'react-redux'

export default function Alert() {

    const {isError} = useSelector(state => state.WeatherReducer)

    return (
        <div className={isError ? "alert-error alert-danger show" : "alert-error alert-danger"}>
            <h3 className="m-0"><i className="far fa-times-circle" /> Your city name can not be found. Default value will be <b>London</b></h3>
        </div>
    )
}
