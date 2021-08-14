import Axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux'

export default function AlertLocation() {
    const dispatch = useDispatch();

    return (
        <div className="askLocation">
            <div className="glass glassLocation">
                <p>This app would like to know your location.</p>
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


                        

                        function getLocation() {
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(showPosition, error);
                                document.querySelector(".loading-wrapper").style.display = "block"

                            } else {
                                console.log("Geolocation is not supported by this browser.");
                            }
                        }



                        function showPosition(position) {
                            Axios({
                                // url: `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}%2C%20${position.coords.longitude}&key=89993048ac254862888f1138dd2de453&language=en&pretty=1`,
                                method: "GET",
                                url:`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=18&addressdetails=1`
                            })
                        
                                .then(result => {                                   
                                    dispatch({
                                        type: "CITY_NAME",
                                        cityName: result.data.address.city
                                    })
                                    document.querySelector(".loading-wrapper").style.display = "none"

                                })
                                .catch(error => {
                                    console.log(error)
                                })
                        }
                        
                        function error (error) {
                            
                            
                        }

                        getLocation()





                        // Axios({
                        //     url:`https://api.db-ip.com/v2/free/self`,
                        //     method: "GET"
                        //   })
                        //   .then((result => {
                        //     dispatch({
                        //         type: "CITY_NAME",
                        //         cityName: result.data.city
                        //     })
                        //   }))
                        //   .catch(error => {
                        //     console.log(error)
                        //   })

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
