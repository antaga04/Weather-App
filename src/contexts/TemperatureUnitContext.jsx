import React, { createContext, useContext, useEffect, useState } from 'react';

const TemperatureUnitContext = createContext();

export function useTemperatureUnit() {
  return useContext(TemperatureUnitContext);
}

export function TemperatureUnitProvider({ children }) {
  const [unit, setUnit] = useState(localStorage.getItem('temperatureUnit') || '');

  useEffect(() => {
    const storedUnit = localStorage.getItem('temperatureUnit');
    if (storedUnit) {
      setUnit(storedUnit);
    } else {
      const defaultUnit = 'celsius';
      setUnit(defaultUnit);
      localStorage.setItem('temperatureUnit', defaultUnit);
    }
  }, []);

  const saveUnit = (unit) => {
    localStorage.setItem('temperatureUnit', unit);
  };

  const toggleUnit = () => {
    const newUnit = unit === 'celsius' ? 'fahrenheit' : 'celsius';
    setUnit(newUnit);
    saveUnit(newUnit);
  };

  return (
    <TemperatureUnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TemperatureUnitContext.Provider>
  );
}
