import React from 'react';
import './HourData.css';
import {
  ArrowCircleIcon,
  CloudSolidIcon,
  GaugeIcon,
  HumidityIcon,
  PrecipitationIcon,
  VisibilityIcon,
  WindIcon,
} from '../Icons/Icons';
import { transformTemperature, utcToLocal } from '../../utils/functions';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext';
import { WeatherIcon } from '../Icons/WeatherIcon';

const HourData = ({ data }) => {
  const { unit } = useTemperatureUnit();
  return (
    <>
      <div id="details">
        <div className="hour-details">
          <p className="time">{utcToLocal(data.dt, 0)}</p>
          <p className="description">{data.description}</p>
        </div>
        <div className="hour-info">
          <p className="temp">{transformTemperature(data.temp, unit, true)}</p>
          <WeatherIcon code={data.icon} css="mini-icon" />
          <div className="pop">
            <p>{Math.round(data.pop * 100)}%</p>
            <PrecipitationIcon />
          </div>
        </div>
      </div>
      <div className={`hidden-details `}>
        <div className="content">
          <div>
            <p>Humidity</p>
            <p>{HumidityIcon()}</p>
            <p>{data.humidity}%</p>
          </div>
          <div>
            <p>Visibility</p>
            <p>{VisibilityIcon()}</p>
            <p>{data.visibility / 1000}km</p>
          </div>
          <div>
            <p>Wind</p>
            <p>{WindIcon()}</p>
            <p>{Math.round(data.windSpeed * 3.6)}km/h</p>
          </div>
          <div>
            <p>Degree</p>
            <p style={{ transform: `rotate(${data.windDeg}deg)` }}>{ArrowCircleIcon()}</p>
            <p>{data.windDeg}º</p>
          </div>
          <div>
            <p>Clouds</p>
            <p>{CloudSolidIcon()}</p>
            <p>{data.clouds}%</p>
          </div>
          <div>
            <p>Pressure</p>
            <p>{GaugeIcon()}</p>
            <p>{data.pressure}hPa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HourData;
