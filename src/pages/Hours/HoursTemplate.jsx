import React, { useEffect, useState } from 'react';
import {
  ArrowCircleIcon,
  CloudSolidIcon,
  GaugeIcon,
  HumidityIcon,
  PrecipitationIcon,
  VisibilityIcon,
  WindIcon,
} from '../../components/Icons/Icons';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext';
import { useCity } from '../../contexts/CityContext';
import { setWeatherColor, transformTemperature, utcToLocal } from '../../utils/functions';
import { WeatherIcon } from '../../components/Icons/WeatherIcon';

const HoursTemplate = ({ weatherData }) => {
  const { unit } = useTemperatureUnit();
  const { selectedCity } = useCity();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (weatherData) {
      setWeatherColor(weatherData.list[0].main.temp, weatherData.list[0].weather[0].description);
    }
  }, [weatherData]);

  const handleHourClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  console.log(weatherData);

  return (
    <>
      <h1>{selectedCity.label === 'My Location' ? weatherData.city.name : selectedCity.label}</h1>
      <ul>
        {weatherData.list.slice(0, 8).map((hour, index) => (
          <li key={`${weatherData.city.name}-${index}`}>
            <div id="details" onClick={() => handleHourClick(index)}>
              <div className="hour-details">
                <p className="time">{utcToLocal(hour.dt)}</p>
                <p className="description">{hour.weather[0].description}</p>
              </div>
              <div className="hour-info">
                <p className="temp">{transformTemperature(hour.main.temp, unit)}</p>
                <WeatherIcon code={hour.weather[0].icon} css='mini-icon'/>
                <div className="pop">
                  <p>{Math.round(hour.pop * 100)}%</p>
                  <PrecipitationIcon />
                </div>
              </div>
            </div>
            <div className={`hidden-details ${openIndex === index ? 'open' : ''}`}>
              <div className="content">
                <div>
                  <p>Humidity</p>
                  <p>{HumidityIcon()}</p>
                  <p>{hour?.main.humidity}%</p>
                </div>
                <div>
                  <p>Visibility</p>
                  <p>{VisibilityIcon()}</p>
                  <p>{hour?.visibility / 1000}km</p>
                </div>
                <div>
                  <p>Wind</p>
                  <p>{WindIcon()}</p>
                  <p>{Math.round(hour?.wind.speed * 3.6)}km/h</p>
                </div>
                <div>
                  <p>Degree</p>
                  <p style={{ transform: `rotate(${hour?.wind.deg}deg)` }}>{ArrowCircleIcon()}</p>
                  <p>{hour?.wind.deg}º</p>
                </div>
                <div>
                  <p>Clouds</p>
                  <p>{CloudSolidIcon()}</p>
                  <p>{hour?.clouds.all}%</p>
                </div>
                <div>
                  <p>Pressure</p>
                  <p>{GaugeIcon()}</p>
                  <p>{hour?.main.pressure}hPa</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HoursTemplate;

/* 

*/
