import React, { useEffect, useState } from 'react';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext';
import { useCity } from '../../contexts/CityContext';
import { setWeatherColor } from '../../utils/functions';
import { WeatherIcon } from '../../components/Icons/WeatherIcon';
import { PrecipitationIcon } from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';

const DaysTemplate = ({ weatherData }) => {
  const { unit } = useTemperatureUnit();
  const { selectedCity } = useCity();

  useEffect(() => {
    if (weatherData) {
      setWeatherColor(weatherData.list[0].main.temp, weatherData.list[0].weather[0].description);
    }
  }, [weatherData]);

  console.log(weatherData);

  return (
    <>
      <h1>{selectedCity.label === 'My Location' ? weatherData.city.name : selectedCity.label}</h1>
      <div className="wrapper">
        <ul>
          {weatherData.list.map((hour, index) => (
            <li key={`${weatherData.city.name}-${index}`}>
              <Card>
                <div className="card">
                  <p className="day">Tomorrow</p>
                  <p className="description">Overcastclouds</p>
                  <div className="details">
                    <p className="temp">
                      <span>29º</span>
                      <span>15º</span>
                    </p>
                    <WeatherIcon code={hour.weather[0].icon} css="mini-icon" />
                    <div className="pop flex-center">
                      <p>{Math.round(hour.pop * 100)}%</p>
                      <PrecipitationIcon />
                    </div>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DaysTemplate;
