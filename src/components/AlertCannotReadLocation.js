import React, { useState } from 'react'

export default function AlertCannotReadLocation() {

    let [isShow, setIsShow] = useState(true)


    setTimeout(() => {
        setIsShow(isShow = false)
    }, 5000);


    return (
        <div className={isShow ? "alert-error alert-warning show" : "alert-error alert-warning"}>
            <h3 className="m-0"><i className="far fa-times-circle" /> Can not read your location. The dafault location should be <b>London</b></h3>
        </div>
    )
}