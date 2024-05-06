export const fetchWeatherData = async (city, url, option) => {
  console.log('---- FETCH ----');
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
  { value: '40.4165 -3.7026', label: 'Madrid, ES' },
  { value: '40.7128 -74.0060', label: 'New York City, US' },
  { value: '35.683889 139.774444', label: 'Tokyo, JP' },
  { value: '41.9028 12.4964', label: 'Rome, IT' },
  { value: '-34.599722222 -58.381944444', label: 'Buenos Aires, AR' },
  { value: '45.424722222 -75.695', label: 'Ottawa, CA' },
  { value: '10.4806 -66.9036', label: 'Caracas, VE' },
  { value: '-12.0464 -77.0428', label: 'Lima, PE' },
];
