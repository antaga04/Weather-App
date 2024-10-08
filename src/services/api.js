export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_PUBLIC_RAPID_GEO_API_KEY,
  },
};

export const GEO_POPULATION = 50000;

export const OPENWEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const FORECAST_API_URL = 'forecast';
export const WEATHER_API_URL = 'weather';