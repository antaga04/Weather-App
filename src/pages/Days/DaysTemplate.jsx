import React, { useEffect, useState } from 'react';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext';
import { useCity } from '../../contexts/CityContext';
import { convertHourToData, transformTemperature } from '../../utils/functions';
import { WeatherIcon } from '../../components/Icons/WeatherIcon';
import { ChevronDown, PrecipitationIcon } from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';
import Accordion from '../../components/Accordion/Accordion';
import AccordionItem from '../../components/Accordion/AccordionItem';
import HourData from '../../components/HourData/HourData';
import useWeatherColorSetter from '../../hooks/useWeatherColorSetter';

const getMostRepeatedData = (countObject) => {
  return Object.entries(countObject).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
};

const calculateDailyForecastInHours = (weatherData) => {
  return Object.entries(
    weatherData.list.reduce((acc, hour) => {
      const completeDate = hour.dt_txt.split(' ')[0];
      const date = completeDate.split('-')[2] + '-' + completeDate.split('-')[1];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(hour);
      return acc;
    }, {})
  );
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

const DaysTemplate = ({ weatherData }) => {
  const { unit } = useTemperatureUnit();
  const { selectedCity } = useCity();
  const [selectedDay, setSelectedDay] = useState(null);
  const [animationDelay, setAnimationDelay] = useState(0.2);
  const [containerTransition, setContainerTransition] = useState(false);

  const dailyForecastInHours = calculateDailyForecastInHours(weatherData);
  const dailyWeather = calculateDailyWeather(dailyForecastInHours);

  useWeatherColorSetter(
    weatherData,
    weatherData.list[0].main.temp,
    weatherData.list[0].weather[0].description
  );

  const handleDayOnCLick = (index) => {
    setSelectedDay(index);
  };

  const handleGoBackOnClick = () => {
    if (selectedDay !== null) {
      setContainerTransition(true);
      setTimeout(() => {
        setSelectedDay(null);
        setContainerTransition(false);
      }, 350);
    }
  };

  return (
    <>
      <h1 className="fadeInAnimation">
        {selectedCity.label === 'My Location' ? weatherData.city.name : selectedCity.label}
      </h1>
      <div className="wrapper">
        <ul className="animateChildren">
          {dailyWeather.map((day, idx) => (
            <li
              key={`${day.date}`}
              onClick={() => handleDayOnCLick(idx)}
              style={{ animationDelay: `${animationDelay * (idx / 2 + 0.75)}s` }}
            >
              <Card>
                <div className="card">
                  <p className="day">{idx === 0 ? 'Tomorrow' : day.date}</p>
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
        <div
          className={`day-hours-container ${selectedDay !== null && 'active'} ${
            containerTransition && 'hide'
          }`}
        >
          {selectedDay !== null && (
            <div className="day-hours">
              <div className="header fadeInAnimation">
                <p className="day">
                  {selectedDay === 0 ? 'Tomorrow' : dailyForecastInHours[selectedDay][0]}
                </p>
                <div className="back-btn" onClick={handleGoBackOnClick}>
                  {ChevronDown()}
                  <p>Back</p>
                </div>
              </div>
              <Accordion>
                {dailyForecastInHours[selectedDay][1].map((hour, idx) => (
                  <AccordionItem key={`day-${dailyForecastInHours[selectedDay][0]}-hour-${idx}`}>
                    <HourData data={convertHourToData(hour)} />
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DaysTemplate;
