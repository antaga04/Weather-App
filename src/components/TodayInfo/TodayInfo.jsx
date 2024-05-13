import React from 'react';
import { transformTemperature } from '../../utils/functions';
import { useCity } from '../../contexts/CityContext';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext';

const TodayInfo = ({ weatherData }) => {
  const { unit } = useTemperatureUnit();
  const { selectedCity } = useCity();

  console.log('\nrender TODAY INFO');

  return (
    <div className="info animation">
      <h1>{selectedCity.label === 'My Location' ? weatherData.name : selectedCity.label}</h1>
      <h2>{weatherData.weather[0].description}</h2>
      <div className="info-temp">
        <p id="temp">{transformTemperature(weatherData.main.temp, unit, true)}</p>
        <p id="feeling">/Feels like</p>
        <p id="feeling-temp">{transformTemperature(weatherData.main.feels_like, unit, true)}</p>
      </div>
      <div className="info-max-min">
        <p>↑ {transformTemperature(weatherData.main.temp_max, unit, true)}</p>
        <span className="temp-divider">~</span>
        <p>↓ {transformTemperature(weatherData.main.temp_min, unit, true)}</p>
      </div>
    </div>
  );
};

export default TodayInfo;
