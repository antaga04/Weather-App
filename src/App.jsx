import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useCity } from './contexts/CityContext';
import { getRandomCity } from './utils/functions';
import { defaultCities } from './services/weatherService';

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
      // console.log('Current position:');
    }

    function errors(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
        if (result.state === 'granted') {
          console.log('granted');
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === 'prompt') {
          console.log('prompt');
          updateSelectedCity(getRandomCity(defaultCities));
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === 'denied') {
          updateSelectedCity(getRandomCity(defaultCities));
          console.log('denied');
        }
      });
    } else {
      updateSelectedCity(getRandomCity(defaultCities));
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
