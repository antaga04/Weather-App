import React from 'react';
import './Day.css';
import Card from '../Card/Card';
import { CloudSolidIcon, HumidityIcon, VisibilityIcon, WindIcon } from '../Icons/Icons';

const Day = ({ day, icon }) => {
  return (
    <Card boxShadow="boxShadow">
      <div className="day-info">
        <div className="days-block">
          <p>{day}</p>
          <div className="forecast-icon">{icon()}</div>
          <div className="flex-center">
            <p>11ºC</p>
            <span>---</span>
            <p>23ºC</p>
          </div>
        </div>
        <div className="days-block days-details">
          <div>
            <div className="title">
              <p>Humidity</p>
              {HumidityIcon()}
            </div>
            <p className='data'>59%</p>
          </div>
          <div>
            <div className="title">
              <p>Clouds</p>
              {CloudSolidIcon()}
            </div>
            <p className='data'>42%</p>
          </div>
          <div>
            <div className="title">
              <p>Visibility</p>
              {VisibilityIcon()}
            </div>
            <p className='data'>28km</p>
          </div>
          <div>
            <div className="title">
              <p>Wind</p>
              {WindIcon()}
            </div>
            <p className='data'>12km/h</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Day;
