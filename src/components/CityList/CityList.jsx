import React, { useEffect, useState } from 'react';
import './CityList.css';
import { XIcon, HeartIcon, ListUl } from '../Icons/Icons';
import { useCity } from '../../contexts/CityContext';
import { defaultCities } from '../../services/weatherService';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CityList = ({ newCity, setNewCity, closeMenu }) => {
  const { currentCity, selectedCity, updateSelectedCity } = useCity();
  const [items, setItems] = useState([]);

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
      localStorage.setItem('w-cities', JSON.stringify(nuevosItems));
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

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
    localStorage.setItem('w-cities', JSON.stringify(newItems));
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
                        <span aria-label="Dragg button" className="dragBtn">
                          <ListUl />
                        </span>
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
                        {XIcon()}
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
