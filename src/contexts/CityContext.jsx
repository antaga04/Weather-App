import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CITY_PARAM,
  LAT_PARAM,
  LON_PARAM,
  cityFromParams,
  cityToSearchParams,
  isSameCity,
} from '../utils/cityUrl';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCity, setCurrentCity] = useState({});

  const label = searchParams.get(CITY_PARAM);
  const lat = searchParams.get(LAT_PARAM);
  const lon = searchParams.get(LON_PARAM);

  const selectedCity = useMemo(() => cityFromParams(label, lat, lon), [label, lat, lon]);

  const updateCurrentCity = (City) => {
    setCurrentCity(City);
  };

  // The selected city lives in the URL, so every pick is a history entry the user can
  // go back to and a link they can share. `replace` is for the initial city (geolocation
  // or fallback), which shouldn't become a step to go back to.
  const updateSelectedCity = useCallback(
    (city, { replace = false } = {}) => {
      if (!city?.value) return;
      setSearchParams(cityToSearchParams(city, searchParams), {
        replace: replace || isSameCity(city, selectedCity),
      });
    },
    [searchParams, selectedCity, setSearchParams]
  );

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
