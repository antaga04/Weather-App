export const fetchWeatherData = async (city, url, option) => {
  console.log(`-- FETCH ${option} --`);
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
    console.log(error);
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
