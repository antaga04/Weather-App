import React, { useEffect, useState } from 'react';
import './CityList.css';
import { XIcon, HeartIcon } from '../Icons/Icons';
import { useCity } from '../../contexts/CityContext';
import { Link, useLocation } from 'react-router-dom';
import { defaultCities } from '../../services/weatherService';

const CityList = ({ newCity, setNewCity, closeMenu }) => {
  const [items, setItems] = useState([]);
  const { currentCity, selectedCity, updateSelectedCity } = useCity();
  //! const location = useLocation();
  //! const basePath = location.pathname.split('/').slice(0, 2).join('/');

  useEffect(() => {
    const storedItems = localStorage.getItem('w-cities');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(defaultCities);
      localStorage.setItem('w-cities', JSON.stringify(defaultCities));
    }
  }, []);

  const removeCity = (index) => {
    const nuevosItems = [...items];
    nuevosItems.splice(index, 1);
    setItems(nuevosItems);
    localStorage.setItem('w-cities', JSON.stringify(nuevosItems));
  };

  const addCity = (city) => {
    if (!items.some((item) => item.label === city.label)) {
      const nuevosItems = [...items, city];
      setItems(nuevosItems);
      localStorage.setItem('items', JSON.stringify(nuevosItems));
      setNewCity('');
    } else {
      console.log(`La ciudad "${city.label}" ya está en la lista.`);
      alert(`La ciudad "${city.label}" ya está en la lista.`);
    }
  };

  const handleCityClick = (city) => {
    if (Object.keys(city).length === 0) {
      alert(`You must grant geolocation access to get current location forecast!`);
    } else {
      updateSelectedCity(city);
      closeMenu();
    }
  };

  return (
    <>
      <ul className="city-list">
        {newCity && (
          <li
            className={`city-item newCity ${
              selectedCity && selectedCity.label === newCity.label ? 'selected' : ''
            }`}
          >
            <button className="city" onClick={() => handleCityClick(newCity)}>
              {newCity.label}
            </button>
            <button className="addBtn" onClick={() => addCity(newCity)}>
              {HeartIcon()}
            </button>
          </li>
        )}
        <li
          className={`city-item ${
            selectedCity && selectedCity.label === currentCity.label ? 'selected' : ''
          }`}
        >
          <button className="city" onClick={() => handleCityClick(currentCity)}>
            My Location
          </button>
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className={`city-item ${
              selectedCity && selectedCity.label === item.label ? 'selected' : ''
            }`}
          >
            <button className="city" onClick={() => handleCityClick(item)}>
              {item.label}
            </button>
            <button className="deleteBtn" onClick={() => removeCity(index)}>
              {XIcon()}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CityList;
