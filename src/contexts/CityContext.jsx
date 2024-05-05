import React, { createContext, useState, useContext } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);

  const updateCurrentCity = (City) => {
    setCurrentCity(City);
  };

  const updateSelectedCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <CityContext.Provider
      value={{
        currentCity,
        selectedCity,
        updateCurrentCity,
        updateSelectedCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);
