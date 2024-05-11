import { useEffect } from 'react';
import { setWeatherColor } from '../utils/functions';

const useWeatherColorSetter = (weatherData, description) => {
  useEffect(() => {
    if (weatherData) {
      setWeatherColor(description);
    }
  }, [weatherData]);
};

export default useWeatherColorSetter;
