import { geoApiOptions } from '../services/api';
import { defaultCities, fetchCityName } from '../services/weatherService';

export const loadCitiesFromLocalStorage = () => {
  const storedItems = localStorage.getItem('w-cities');
  return storedItems ? JSON.parse(storedItems) : defaultCities;
};

export const saveCitiesToLocalStorage = (cities) => {
  localStorage.setItem('w-cities', JSON.stringify(cities));
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

    async function success(pos) {
      const crd = pos.coords;
      // console.log(crd);
      
      try {
        const currentCityName = await fetchCityName(crd, geoApiOptions);
        resolve({ label: currentCityName, value: `${crd.latitude} ${crd.longitude}` });
      } catch (error) {
        reject(error);
      }
    }

    function errors(err) {
      reject(err);
    }

    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else {
          reject(new Error('Geolocation permission denied'));
        }
      });
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};

