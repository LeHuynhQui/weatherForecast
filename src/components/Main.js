import React from 'react'
import ChartandNextDay from './ChartandNextDay'
import Info from './Info'

export default function Main() {
    return (
        <section className="main">
            <div className="row h-100">
                <Info />
                <ChartandNextDay />
            </div>
        </section>
    )
}
