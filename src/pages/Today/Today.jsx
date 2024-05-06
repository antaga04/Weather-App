import React, { useEffect, useState } from 'react';
import './Today.css';
import { useCity } from '../../contexts/CityContext';
import Spinner from '../../components/Spinner/Spinner';
import Component from './Component';
import { fetchWeatherData } from '../../services/weatherService';
import { WEATHER_API_URL } from '../../services/API';

const CACHE_EXPIRATION_TIME = 900000;

const Today = () => {
  const { selectedCity } = useCity();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchData(selectedCity, WEATHER_API_URL, 'weather');
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
  }, [selectedCity]);

  return (
    <main className="today-section">
      {loading ? <Spinner /> : <Component selectedCity={selectedCity} weatherData={weatherData} />}
    </main>
  );
};

const fetchData = async (selectedCity, url, option) => {
  const cachedData = getWeatherDataFromLocalStorage(selectedCity);
  if (cachedData && !isDataExpired(cachedData)) {
    return cachedData;
  } else {
    const data = await fetchWeatherData(selectedCity, url, option);
    saveWeatherDataToLocalStorage(selectedCity, data);
    return data;
  }
};

const getWeatherDataFromLocalStorage = (selectedCity) => {
  const cachedData = localStorage.getItem(selectedCity.label);
  return cachedData ? JSON.parse(cachedData) : null;
};

const isDataExpired = (data) => {
  return Date.now() - data.timestamp >= CACHE_EXPIRATION_TIME;
};

const saveWeatherDataToLocalStorage = (selectedCity, data) => {
  localStorage.setItem(selectedCity.label, JSON.stringify(data));
};

export default Today;
