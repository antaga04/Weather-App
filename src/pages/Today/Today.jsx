import React from 'react';
import './Today.css';
import WeatherComponent from '../../components/WeatherComponent';
import TodayTemplate from './TodayTemplate';

const Today = () => {
  return (
    <WeatherComponent apiOption={'weather'} Component={TodayTemplate} section="today-section" />
  );
};

export default Today;
