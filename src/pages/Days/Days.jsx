import React from 'react';
import './Days.css';
import WeatherComponent from '../../components/WeatherComponent';
import DaysTemplate from './DaysTemplate';
import { FORECAST_API_URL } from '../../services/API';

const Days = () => {
  return (
    <WeatherComponent apiOption={FORECAST_API_URL} Component={DaysTemplate} section="days-section" />
  );
};

export default Days;
