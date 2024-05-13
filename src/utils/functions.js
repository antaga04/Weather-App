export const utcToLocal = (timestamp, timeZoneOffset) => {
  const date = new Date(timestamp * 1000);
  const utcOffset = date.getTimezoneOffset() * 60;
  const localTime = new Date((timestamp + utcOffset + timeZoneOffset) * 1000);
  const localHour = localTime.getHours();
  const localMinutes = localTime.getMinutes().toString().padStart(2, '0');
  return `${localHour}:${localMinutes}`;
};

export const localDate = (date) => {
  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const dayOfWeek = date.getDay();

  return {
    day,
    month,
    year,
    dayOfWeek,
  };
};

export const celsiusAFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const transformTemperature = (temp, unit, letter) => {
  if (unit === 'celsius') {
    return `${Math.round(temp)}${letter ? ' ºC' : ''}`;
  } else {
    const fahrenheit = (temp * 9) / 5 + 32;
    return `${Math.round(fahrenheit)}${letter ? ' ºF' : ''}`;
  }
};

export const getRandomCity = (defaultCities) => {
  const randomIndex = Math.floor(Math.random() * defaultCities.length);
  return defaultCities[randomIndex];
};

export const getDayOfWeek = (dateString, dayNames) => {
  const [day, month] = dateString.split('-').map(Number);
  const dayIndex = new Date(2024, month - 1, day).getDay();
  return dayNames[dayIndex];
};

export const convertHourToData = (hour, timezone) => {
  const { dt, main, weather, pop, visibility, wind, clouds } = hour;
  const { temp, humidity, pressure } = main;
  const { description, icon } = weather[0];
  const { speed: windSpeed, deg: windDeg } = wind;

  return {
    timezone,
    dt,
    description,
    temp,
    icon,
    pop,
    humidity,
    visibility,
    windSpeed,
    windDeg,
    clouds: clouds.all,
    pressure,
  };
};

export const setWeatherColor = (weatherDescription) => {
  let color;

  switch (weatherDescription) {
    case 'clear sky':
      color = '#FFCC00';
      break;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      color = '#7d879b';
      break;
    case 'overcast clouds':
      color = '#4f6470';
      break;
    case 'shower rain':
    case 'heavy intensity rain':
    case 'light intensity shower rain':
    case 'moderate rain':
    case 'rain':
    case 'drizzle':
    case 'light rain':
      color = '#316f98';
      break;
    case 'thunderstorm':
      color = '#FF3300';
      break;
    case 'snow':
      color = '#d9d9d9';
      break;
    case 'mist':
    case 'haze':
    case 'fog':
      color = '#c6c6c6';
      break;
    default:
      color = '#b96fcc';
      break;
  }
  document.documentElement.style.setProperty('--weather', color);
};
