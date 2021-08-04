import React, { Fragment } from 'react'
import ChartList from './ChartList'
import Nextday from './Nextday'

export default function ChartandNextDay() {
    return (
        <Fragment>
            <div className="col-9">
                {/* <h3 class="text-muted">Temperature</h3> */}
                {/* <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}
                <ChartList />
                <Nextday />
            </div>
        </Fragment>
    )
}
