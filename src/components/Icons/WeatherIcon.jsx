import React from 'react';
import {
  CloudIcon,
  CloudLightRainIcon,
  CloudLightiningIcon,
  CloudMoonIcon,
  CloudRainIcon,
  CloudSunIcon,
  MoonIcon,
  SnnowflakeIcon,
  SunIcon,
  Unknown,
  WaterIcon,
} from './Icons';

export function WeatherIcon({ code, css }) {
  const getIcon = (code) => {
    switch (code) {
      case '01d':
        return <SunIcon />;
      case '01n':
        return <MoonIcon />;
      case '02d':
      case '03d':
        return <CloudSunIcon />;
      case '02n':
      case '03n':
        return <CloudMoonIcon />;
      case '04d':
      case '04n':
        return <CloudIcon />;
      case '09d':
      case '09n':
        return <CloudLightRainIcon />;
      case '10d':
      case '10n':
        return <CloudRainIcon />;
      case '11d':
      case '11n':
        return <CloudLightiningIcon />;
      case '13d':
      case '13n':
        return <SnnowflakeIcon />;
      case '50d':
      case '50n':
        return <WaterIcon />;
      default:
        return <Unknown />;
    }
  };
  return <div className={css}>{getIcon(code)}</div>;
}
