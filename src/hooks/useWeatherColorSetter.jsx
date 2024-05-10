import { useEffect } from 'react';
import { setWeatherColor } from '../utils/functions';

const useWeatherColorSetter = (weatherData, temp, description) => {
  useEffect(() => {
    if (weatherData) {
      setWeatherColor(temp, description);
    }
  }, [weatherData]);
};

export default useWeatherColorSetter;
