import React, { Fragment } from 'react'
import ChartHumidity from './ChartHumidity'
import ChartTemperature from './ChartTemperature'

export default function ChartList() {
    return (
        <Fragment>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="temperature-tab" data-toggle="tab" href="#temperature" role="tab" aria-controls="temperature" aria-selected="true">Temperature</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="humidity-tab" data-toggle="tab" href="#humidity" role="tab" aria-controls="humidity" aria-selected="false">Humidity</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="temperature" role="tabpanel" aria-labelledby="temperature-tab">
                    <ChartTemperature />
                </div>
                <div className="tab-pane fade" id="humidity" role="tabpanel" aria-labelledby="humidity-tab">
                    <ChartHumidity />
                </div>
            </div>
        </Fragment>
    )
}
