import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Alert from './components/Alert';
import AlertCannotReadLocation from './components/AlertCannotReadLocation';
// import AlertLocation from './components/AlertLocation';
import Header from './components/Header';
import Loading from './components/Loading';
import Main from './components/Main';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    function getLocation() {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error);
        document.querySelector(".loading-wrapper").style.display = "block"

      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }



    function showPosition(position) {
      axios({
        // url: `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}%2C%20${position.coords.longitude}&key=89993048ac254862888f1138dd2de453&language=en&pretty=1`,
        method: "GET",
        url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=18&addressdetails=1`
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

    function error(error) {
      document.querySelector(".loading-wrapper").style.display = "none"

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

    }

    getLocation()


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (

    <div className="App">
      <Loading />
      <Header />
      {/* <AlertLocation /> */}
      <Main />
      <Alert />
      <AlertCannotReadLocation />

    </div>
  );
}

export default App;
