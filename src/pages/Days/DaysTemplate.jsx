import React, { useState } from 'react';
import { useCity } from '../../contexts/CityContext';
import useWeatherColorSetter from '../../hooks/useWeatherColorSetter';
import DailyWeather from '../../components/DailyWeather/DailyWeather';
import DayHours from '../../components/DayHours/DayHours';

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

const DaysTemplate = ({ weatherData }) => {
  const { selectedCity } = useCity();
  const [selectedDay, setSelectedDay] = useState(null);

  const dailyForecastInHours = calculateDailyForecastInHours(weatherData);

  useWeatherColorSetter(weatherData, weatherData.list[0].weather[0].description);

  const handleDayOnCLick = (index) => {
    setSelectedDay(index);
  };

  console.log('\nrender - DAYS TEMPLATE');

  return (
    <>
      <h1 className="fadeInAnimation">
        {selectedCity.label === 'My Location' ? weatherData.city.name : selectedCity.label}
      </h1>
      <div className="wrapper">
        <DailyWeather handleDayOnCLick={handleDayOnCLick} dailyForecastInHours={dailyForecastInHours} />
        <DayHours
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          dailyForecastInHours={dailyForecastInHours}
        />
      </div>
    </>
  );
};

export default DaysTemplate;
