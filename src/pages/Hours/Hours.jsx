import React from 'react';
import './Hours.css';
import { CloudIcon } from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';

const Hours = () => {
  return (
    <main className="hours-section">
      <h1>Bialystok, PL</h1>
      <ul>
        <li className="">
          <div className="hour-info">
            <p className="time">24</p>
            <div className="icon">{CloudIcon()}</div>
            <p className="description">Overcast Clouds</p>
            <div className="temp">
              <p>13 ºC</p>
              <p>/Feels like</p>
              <p>12 ºC</p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="hour-info">
            <p className="time">03</p>
            <div className="icon">{CloudIcon()}</div>
            <p className="description">Overcast Clouds</p>
            <div className="temp">
              <p>13 ºC</p>
              <p>/Feels like</p>
              <p>12 ºC</p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="hour-info">
            <p className="time">07</p>
            <div className="icon">{CloudIcon()}</div>
            <p className="description">Overcast Clouds</p>
            <div className="temp">
              <p>13 ºC</p>
              <p>/Feels like</p>
              <p>12 ºC</p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="hour-info">
            <p className="time">10</p>
            <div className="icon">{CloudIcon()}</div>
            <p className="description">Overcast Clouds</p>
            <div className="temp">
              <p>13 ºC</p>
              <p>/Feels like</p>
              <p>12 ºC</p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="hour-info">
            <p className="time">13</p>
            <div className="icon">{CloudIcon()}</div>
            <p className="description">Overcast Clouds</p>
            <div className="temp">
              <p>13 ºC</p>
              <p>/Feels like</p>
              <p>12 ºC</p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="hour-info">
            <p className="time">16</p>
            <div className="icon">{CloudIcon()}</div>
            <p className="description">Overcast Clouds</p>
            <div className="temp">
              <p>13 ºC</p>
              <p>/Feels like</p>
              <p>12 ºC</p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="hour-info">
            <p className="time">18</p>
            <div className="icon">{CloudIcon()}</div>
            <p className="description">Overcast Clouds</p>
            <div className="temp">
              <p>13 ºC</p>
              <p>/Feels like</p>
              <p>12 ºC</p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="hour-info">
            <p className="time">21</p>
            <div className="icon">{CloudIcon()}</div>
            <p className="description">Overcast Clouds</p>
            <div className="temp">
              <p>13 ºC</p>
              <p>/Feels like</p>
              <p>12 ºC</p>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Hours;
