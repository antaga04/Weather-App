import React, { useEffect, useState } from 'react';
import './CityList.css';
import { XIcon, HeartIcon, ListUl } from '../Icons/Icons';
import { useCity } from '../../contexts/CityContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { asciiArt } from '../../utils/data';
import {
  loadCitiesFromLocalStorage,
  getLocation,
  saveCitiesToLocalStorage,
} from '../../utils/cityUtils';
import { getRandomCity } from '../../utils/functions';
import { defaultCities } from '../../services/weatherService';

const CityList = ({ newCity, setNewCity, closeMenu }) => {
  const { currentCity, selectedCity, updateSelectedCity, updateCurrentCity } = useCity();
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadCities();
    fetchLocation();
    console.log(asciiArt);
  }, []);

  const loadCities = () => {
    const cities = loadCitiesFromLocalStorage();
    setItems(cities);
  };

  const fetchLocation = () => {
    getLocation()
      .then((location) => {
        updateCurrentCity(location);
        updateSelectedCity(location);
      })
      .catch((error) => {
        console.warn('Error fetching location:', error);
        updateSelectedCity(getRandomCity(defaultCities));
        // alert(error.message);
      });
  };

  const removeCity = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    saveCitiesToLocalStorage(newItems);
  };

  const addCity = (city) => {
    if (!items.some((item) => item.label === city.label)) {
      const newItems = [...items, city];
      setItems(newItems);
      saveCitiesToLocalStorage(newItems);
      setNewCity('');
    } else {
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

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
    saveCitiesToLocalStorage(newItems);
  };

  return (
    <div className="city-list">
      {newCity && (
        <div
          className={`city-item newCity ${
            selectedCity && selectedCity.label === newCity.label ? 'selected' : ''
          }`}
        >
          <button id={newCity.label} className="city" onClick={() => handleCityClick(newCity)}>
            {newCity.label}
          </button>
          <button
            aria-label="Add to favourites"
            className="addBtn"
            onClick={() => addCity(newCity)}
          >
            {HeartIcon()}
          </button>
        </div>
      )}
      <div
        className={`city-item ${
          selectedCity && selectedCity.label === currentCity.label ? 'selected' : ''
        }`}
      >
        <button
          aria-label="Select your location"
          className="city"
          onClick={() => handleCityClick(currentCity)}
        >
          My Location
        </button>
        <button
          aria-label="Add to favourites"
          className="addBtn"
          onClick={() => addCity(selectedCity)}
        >
          {HeartIcon()}
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <Draggable key={item.label} draggableId={item.label} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`city-item ${
                        selectedCity && selectedCity.label === item.label ? 'selected' : ''
                      }`}
                    >
                      <div {...provided.dragHandleProps}>
                        <button aria-label="Dragg button" className="dragBtn">
                          <ListUl />
                        </button>
                      </div>
                      <button
                        aria-label={`Select ${item.label}`}
                        className="city"
                        onClick={() => handleCityClick(item)}
                      >
                        {item.label}
                      </button>
                      <button
                        aria-label="Delete from favourites"
                        className="deleteBtn"
                        onClick={() => removeCity(index)}
                      >
                        <XIcon />
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default CityList;
