import Axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux'

export default function AlertLocation() {
    const dispatch = useDispatch();

    return (
        <div className="askLocation">
            <div className="glass glassLocation">
                <p>This app would like to use your IP address.</p>
                <div className="text-right">
                    <button onClick={() => {
                        document.querySelector(".askLocation").classList.add("hide")
                        dispatch({
                            type: "ALLOW",
                            isAllow: true
                        })
                        setTimeout(() => {
                            dispatch({
                                type: "ALLOW",
                                isAllow: false
                            })
                        }, 3000);
                    }}>Not Allow</button>

                    <button onClick={() => {
                        document.querySelector(".askLocation").classList.add("hide");
                        dispatch({
                            type: "ALLOW",
                            isAllow: false
                        })

                        Axios({
                            url:`https://api.db-ip.com/v2/free/self`,
                            method: "GET"
                          })
                          .then((result => {
                            dispatch({
                                type: "CITY_NAME",
                                cityName: result.data.city
                            })
                          }))
                          .catch(error => {
                            console.log(error)
                          })

                        // dispatch({
                        //     type: "CITY_NAME",
                        //     cityName: "Ho Chi Minh"
                        // })
                    }}>Allow</button>
                    
                </div>
            </div>
        </div>
    )
}
