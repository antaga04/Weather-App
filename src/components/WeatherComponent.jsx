import React, { useEffect, useState } from 'react';
import { useCity } from '../contexts/CityContext';
import Spinner from './Spinner/Spinner';
import { fetchWeatherData } from '../services/weatherService';
import { OPENWEATHER_API_URL } from '../services/api';

const CACHE_EXPIRATION_TIME = 900000;

const WeatherComponent = ({ apiOption, Component, section }) => {
  const { selectedCity } = useCity();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchData(selectedCity, apiOption);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    if (selectedCity) {
      loadData();
    }
  }, [selectedCity, apiOption, section]);

  return (
    <main className={section}>
      {loading ? (
        <Spinner />
      ) : weatherData === null ? (
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <p>Something went wrong. No weather data found.</p>
          <p>Try again later.</p>
        </div>
      ) : (
        <Component selectedCity={selectedCity} weatherData={weatherData} />
      )}
    </main>
  );
};

const fetchData = async (selectedCity, apiOption) => {
  const cachedData = getWeatherDataFromLocalStorage(selectedCity, apiOption);
  if (cachedData && !isDataExpired(cachedData)) {
    return cachedData;
  } else {
    const data = await fetchWeatherData(selectedCity, OPENWEATHER_API_URL, apiOption);
    saveWeatherDataToLocalStorage(selectedCity, apiOption, data);
    return data;
  }
};

const getWeatherDataFromLocalStorage = (selectedCity, apiOption) => {
  const cachedData = localStorage.getItem(getStorageKey(selectedCity, apiOption));
  return cachedData ? JSON.parse(cachedData) : null;
};

const isDataExpired = (data) => {
  return Date.now() - data.timestamp >= CACHE_EXPIRATION_TIME;
};

const saveWeatherDataToLocalStorage = (selectedCity, apiOption, data) => {
  localStorage.setItem(getStorageKey(selectedCity, apiOption), JSON.stringify(data));
};

const getStorageKey = (selectedCity, apiOption) => {
  return `${selectedCity.label}_${apiOption}`;
};

export default WeatherComponent;
