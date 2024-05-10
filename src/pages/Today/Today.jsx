import React from 'react';
import './Today.css';
import WeatherComponent from '../../components/WeatherComponent';
import TodayTemplate from './TodayTemplate';
import { WEATHER_API_URL } from '../../services/api';

const Today = () => {
  return (
    <WeatherComponent
      apiOption={WEATHER_API_URL}
      Component={TodayTemplate}
      section="today-section"
    />
  );
};

export default Today;
