import React, { useState } from 'react';
import { getDayOfWeek, transformTemperature } from '../../utils/functions';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext';
import Card from '../Card/Card';
import { PrecipitationIcon } from '../Icons/Icons';
import { WeatherIcon } from '../Icons/WeatherIcon';
import { dayNames } from '../../utils/data';

const getMostRepeatedData = (countObject) => {
  return Object.entries(countObject).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
};

const calculateDailyWeather = (dailyForecastInHours) => {
  return dailyForecastInHours.map(([date, hours]) => {
    const tempData = {
      maxTemp: -Infinity,
      minTemp: Infinity,
      iconCounts: {},
      descriptionCounts: {},
      maxPop: -Infinity,
    };

    hours.forEach((hour) => {
      tempData.maxTemp = Math.max(tempData.maxTemp, hour.main.temp_max);
      tempData.minTemp = Math.min(tempData.minTemp, hour.main.temp_min);
      tempData.maxPop = Math.max(tempData.maxPop, hour.pop);

      const icon = hour.weather[0].icon;
      const description = hour.weather[0].description;
      tempData.iconCounts[icon] = (tempData.iconCounts[icon] || 0) + 1;
      tempData.descriptionCounts[description] = (tempData.descriptionCounts[description] || 0) + 1;
    });

    tempData.icon = getMostRepeatedData(tempData.iconCounts);
    tempData.description = getMostRepeatedData(tempData.descriptionCounts);

    return {
      date,
      maxTemp: tempData.maxTemp,
      minTemp: tempData.minTemp,
      icon: tempData.icon,
      description: tempData.description,
      maxPop: tempData.maxPop,
    };
  });
};

const DailyWeather = ({ handleDayOnCLick, dailyForecastInHours }) => {
  const { unit } = useTemperatureUnit();
  const [animationDelay, setAnimationDelay] = useState(0.2);

  const dailyWeather = calculateDailyWeather(dailyForecastInHours);

  console.log('\nrender DAILYWEATHER');

  return (
    <ul className="animateChildren">
      {dailyWeather.slice(1).map((day, idx) => (
        <li
          key={`${day.date}`}
          onClick={() => handleDayOnCLick(idx)}
          style={{ animationDelay: `${animationDelay * (idx / 2 + 0.75)}s` }}
        >
          <Card>
            <div className="card">
              <p className="day">
                {idx === 0 ? 'Tomorrow' : `${getDayOfWeek(day.date, dayNames)} ${day.date}`}
              </p>
              <p className="description">{day.description}</p>
              <div className="details">
                <p className="temp">
                  <span>{transformTemperature(Math.round(day.maxTemp), unit)}º</span>
                  <span>{transformTemperature(Math.round(day.minTemp), unit)}º</span>
                </p>
                <WeatherIcon code={day.icon} css="mini-icon" />
                <div className="pop flex-center">
                  <p>{Math.round(day.maxPop * 100)}%</p>
                  <PrecipitationIcon />
                </div>
              </div>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default DailyWeather;
