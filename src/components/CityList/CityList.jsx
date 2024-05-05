import React, { useEffect, useState } from 'react';
import './CityList.css';
import { XIcon, HeartIcon } from '../Icons/Icons';
import { useCity } from '../../contexts/CityContext';
import { Link, useLocation } from 'react-router-dom';

const listaPorDefecto = [
  { value: '40.4165 -3.7026', label: 'Madrid, ES' },
  { value: '40.7128 -74.0060', label: 'New York City, US' },
  { value: '35.683889 139.774444', label: 'Tokyo, JP' },
  { value: '41.9028 12.4964', label: 'Rome, IT' },
  { value: '-34.599722222 -58.381944444', label: 'Buenos Aires, AR' },
  { value: '45.424722222 -75.695', label: 'Ottawa, CA' },
  { value: '10.4806 -66.9036', label: 'Caracas, VE' },
  { value: '-12.0464 -77.0428', label: 'Lima, PE' },
];

const CityList = ({ newCity, setNewCity, closeMenu }) => {
  const [items, setItems] = useState([]);
  const { currentCity, selectedCity, updateSelectedCity } = useCity();
  const location = useLocation();
  const basePath = location.pathname.split('/').slice(0, 2).join('/');

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(listaPorDefecto);
      localStorage.setItem('items', JSON.stringify(listaPorDefecto));
    }
  }, []);

  const removeCity = (index) => {
    const nuevosItems = [...items];
    nuevosItems.splice(index, 1);
    setItems(nuevosItems);
    localStorage.setItem('items', JSON.stringify(nuevosItems));
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
    updateSelectedCity(city);
    closeMenu();
  };

  return (
    <>
      <ul className="city-list">
        {newCity && (
          <li className="city-item newCity">
            <p className="city">{newCity.label}</p>
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
          <Link
            to={`${basePath}/My Location`}
            className="city"
            onClick={() => handleCityClick(currentCity)}
          >
            My Location
          </Link>
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className={`city-item ${
              selectedCity && selectedCity.label === item.label ? 'selected' : ''
            }`}
          >
            <Link
              to={`${basePath}/${item.label}`}
              className="city"
              onClick={() => handleCityClick(item)}
            >
              {item.label}
            </Link>
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
