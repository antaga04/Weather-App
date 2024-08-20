export const fetchWeatherData = async (city, url, option) => {
  // console.log(`-- FETCH ${option} --`);
  const [lat, lon] = city.value.split(' ');
  const newURL = `${url}/${option}?lat=${lat}&lon=${lon}&appid=${
    import.meta.env.VITE_PUBLIC_WEATHER_API_KEY
  }&units=metric`;

  try {
    const response = await fetch(newURL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { city: city.label, ...data, timestamp: Date.now() };
  } catch (error) {
    console.warn(error);
    throw error;
  }
};

export const defaultCities = [
  { value: '53.12744 23.15649', label: 'Białystok, PL' },
  { value: '40.4165 -3.7026', label: 'Madrid, ES' },
  { value: '41.01 28.960277777', label: 'Istanbul, TR' },
  { value: '42.340833333 -3.699722222', label: 'Burgos, ES' },
  { value: '40.7128 -74.0060', label: 'New York City, US' },
  { value: '35.683889 139.774444', label: 'Tokyo, JP' },
  { value: '37.986111111 -1.130277777', label: 'Murcia, ES' },
  { value: '40.833333333 14.25', label: 'Naples, IT' },
];

export const fetchCityName = async (crd, geoApiOptions) => {
  try {
    const { latitude, longitude } = crd;

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${latitude}${longitude}/nearbyCities?radius=100`;
    const response = await fetch(url, geoApiOptions);

    if (!response.ok) {
      throw new Error(`Error fetching city name: ${response.statusText}`);
    }

    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const city = data.data[0].city;
      return city;
    } else {
      throw new Error('No nearby cities found');
    }
  } catch (error) {
    console.error(`Error fetching city name: ${error.message}`);
    return 'My Location';
  }
};
