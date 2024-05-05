import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useCity } from './contexts/CityContext';

function App() {
  const { updateCurrentCity, updateSelectedCity } = useCity();

  useEffect(() => {
    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

    function success(pos) {
      const crd = pos.coords;
      // console.log(pos);
      const location = {
        label: 'My Location',
        value: `${crd.latitude} ${crd.longitude}`,
      };
      updateCurrentCity(location);
      updateSelectedCity(location);
      console.log('Current position:');
      /* console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`); */
    }

    function errors(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
        // console.log(result);
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === 'denied') {
          updateSelectedCity({
            value: '40.4168 -3.7038',
            label: 'Madrid, ES',
          });
        }
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
