import React from 'react';
import './Hours.css';
import WeatherComponent from '../../components/WeatherComponent';
import HoursTemplate from './HoursTemplate';
import { FORECAST_API_URL } from '../../services/api';

const Hours = () => {
  return (
    <WeatherComponent
      apiOption={FORECAST_API_URL}
      Component={HoursTemplate}
      section="hours-section"
    />
  );
};

export default Hours;
