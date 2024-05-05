export const utcToLocal = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const localHour = date.getHours();
  const localMinutes = date.getMinutes().toString().padStart(2, '0');
  return `${localHour}:${localMinutes}`;
};

export const celsiusAFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const transformTemperature = (temp, unit) => {
  if (unit === 'celsius') {
    return `${Math.round(temp)} ºC`;
  } else {
    const fahrenheit = (temp * 9) / 5 + 32;
    return `${Math.round(fahrenheit)} ºF`;
  }
};

export const setWeatherColor = (temperature, weatherDescription) => {
  let color;

  // Asignar colores basados en la descripción del tiempo
  switch (weatherDescription) {
    case 'clear sky':
      color = '#FFCC00'; // Amarillo para cielo despejado
      break;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      color = '#769eb2'; // Azul claro para nubes dispersas
      break;
    case 'overcast clouds':
      color = '#4f6470'; // Gris para nubes nubladas
      break;
    case 'shower rain':
    case 'rain':
    case 'light rain':
      color = '#316f98'; // Azul para lluvia
      break;
    case 'thunderstorm':
      color = '#FF3300'; // Rojo para tormentas
      break;
    case 'snow':
      color = '#d9d9d9'; // Blanco para nieve
      break;
    case 'mist':
      color = '#c6c6c6'; // Gris claro para niebla
      break;
    default:
      color = '#b96fcc'; // Violeta por defecto
      break;
  }

  // Establecer el color del fondo
  document.documentElement.style.setProperty('--weather', color);
};

export const setWeatherColor1 = (temperature) => {
  let color;
  if (temperature <= -10) {
    color = '#0033CC'; // Azul oscuro para temperaturas muy frías
  } else if (temperature > -10 && temperature <= -5) {
    color = '#3366CC'; // Azul para temperaturas frías
  } else if (temperature > -5 && temperature <= 0) {
    color = '#66CCFF'; // Azul claro para temperaturas frías
  } else if (temperature > 0 && temperature <= 5) {
    color = '#66FF99'; // Verde claro para temperaturas frescas
  } else if (temperature > 5 && temperature <= 10) {
    color = '#CCFF66'; // Verde para temperaturas frescas
  } else if (temperature > 10 && temperature <= 15) {
    color = '#dbdb58'; // Amarillo para temperaturas templadas
  } else if (temperature > 15 && temperature <= 20) {
    color = '#FFCC00'; // Amarillo oscuro para temperaturas templadas
  } else if (temperature > 20 && temperature <= 25) {
    color = '#FF9900'; // Naranja para temperaturas cálidas
  } else if (temperature > 25 && temperature <= 30) {
    color = '#FF6600'; // Naranja oscuro para temperaturas cálidas
  } else if (temperature > 30 && temperature <= 35) {
    color = '#FF3300'; // Rojo para temperaturas muy cálidas
  } else if (temperature > 35 && temperature <= 40) {
    color = '#CC0000'; // Rojo oscuro para temperaturas muy cálidas
  } else {
    color = '#990000'; // Rojo oscuro para temperaturas extremadamente cálidas
  }
  document.documentElement.style.setProperty('--weather', color);
};

export const setWeatherColor2 = (temperature) => {
  let color;
  if (temperature <= -10) {
    color = '#0033CC'; // Azul oscuro para temperaturas muy frías
  } else if (temperature > -10 && temperature <= 0) {
    color = '#3366CC'; // Azul para temperaturas frías
  } else if (temperature > 0 && temperature <= 10) {
    color = '#66CCFF'; // Azul claro para temperaturas frías
  } else if (temperature > 10 && temperature <= 20) {
    color = '#66FF99'; // Verde claro para temperaturas frescas
  } else if (temperature > 20 && temperature <= 30) {
    color = '#FFCC00'; // Amarillo para temperaturas templadas
  } else if (temperature > 30 && temperature <= 40) {
    color = '#FF6600'; // Naranja para temperaturas cálidas
  } else {
    color = '#FF3333'; // Rojo para temperaturas muy cálidas
  }
  document.documentElement.style.setProperty('--weather', color);
};

export const setWeatherColor3 = (temperature, weatherDescription) => {
  let color;

  // Asignar colores basados en la temperatura
  if (temperature <= -10) {
    color = '#0033CC'; // Azul oscuro para temperaturas muy frías
  } else if (temperature > -10 && temperature <= -5) {
    color = '#3366CC'; // Azul para temperaturas frías
  } else if (temperature > -5 && temperature <= 0) {
    color = '#66CCFF'; // Azul claro para temperaturas frías
  } else if (temperature > 0 && temperature <= 5) {
    color = '#66FF99'; // Verde claro para temperaturas frescas
  } else if (temperature > 5 && temperature <= 10) {
    color = '#CCFF66'; // Verde para temperaturas frescas
  } else if (temperature > 10 && temperature <= 15) {
    color = '#FFFF66'; // Amarillo para temperaturas templadas
  } else if (temperature > 15 && temperature <= 20) {
    color = '#FFCC00'; // Amarillo oscuro para temperaturas templadas
  } else if (temperature > 20 && temperature <= 25) {
    color = '#FF9900'; // Naranja para temperaturas cálidas
  } else if (temperature > 25 && temperature <= 30) {
    color = '#FF6600'; // Naranja oscuro para temperaturas cálidas
  } else if (temperature > 30 && temperature <= 35) {
    color = '#FF3300'; // Rojo para temperaturas muy cálidas
  } else if (temperature > 35 && temperature <= 40) {
    color = '#CC0000'; // Rojo oscuro para temperaturas muy cálidas
  } else {
    color = '#990000'; // Rojo oscuro para temperaturas extremadamente cálidas
  }

  // Asignar colores basados en la descripción del tiempo
  switch (weatherDescription) {
    case 'clear sky':
      color = '#FFCC00'; // Amarillo para cielo despejado
      break;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      color = '#66CCFF'; // Azul claro para nubes dispersas
      break;
    case 'shower rain':
    case 'rain':
      color = '#3366CC'; // Azul para lluvia
      break;
    case 'thunderstorm':
      color = '#FF3300'; // Rojo para tormentas
      break;
    case 'snow':
      color = '#FFFFFF'; // Blanco para nieve
      break;
    case 'mist':
      color = '#CCCCCC'; // Gris claro para niebla
      break;
    default:
      // Mantener el color asignado previamente si no hay coincidencia
      break;
  }

  // Establecer el color del fondo
  document.documentElement.style.setProperty('--weather', color);
};

export const setWeatherColor4 = (temperature, weatherDescription) => {
  // Pesos para temperatura y descripción del tiempo
  const temperatureWeight = 0.6;
  const weatherWeight = 0.4;

  // Valores base de color para temperatura y descripción del tiempo
  let temperatureColor;
  let weatherColor;

  // Asignar colores basados en la temperatura
  if (temperature <= -10) {
    temperatureColor = '#0033CC'; // Azul oscuro para temperaturas muy frías
  } else if (temperature > -10 && temperature <= 0) {
    temperatureColor = '#3366CC'; // Azul para temperaturas frías
  } else if (temperature > 0 && temperature <= 10) {
    temperatureColor = '#66CCFF'; // Azul claro para temperaturas frescas
  } else if (temperature > 10 && temperature <= 20) {
    temperatureColor = '#FFCC00'; // Amarillo para temperaturas templadas
  } else if (temperature > 20 && temperature <= 30) {
    temperatureColor = '#FF6600'; // Naranja oscuro para temperaturas cálidas
  } else if (temperature > 30) {
    temperatureColor = '#FF3300'; // Rojo para temperaturas muy cálidas
  }

  // Asignar colores basados en la descripción del tiempo
  switch (weatherDescription) {
    case 'clear sky':
      weatherColor = '#FFCC00'; // Amarillo para cielo despejado
      break;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      weatherColor = '#CCCCCC'; // Gris claro para nubes dispersas
      break;
    case 'shower rain':
    case 'rain':
      weatherColor = '#3366CC'; // Azul para lluvia
      break;
    case 'thunderstorm':
      weatherColor = '#FF3300'; // Rojo para tormentas
      break;
    case 'snow':
      weatherColor = '#FFFFFF'; // Blanco para nieve
      break;
    case 'mist':
      weatherColor = '#CCCCCC'; // Gris claro para niebla
      break;
    default:
      weatherColor = '#FFFFFF'; // Blanco por defecto
      break;
  }

  // Calcular el color final combinando la temperatura y la descripción del tiempo
  const combinedColor = blendColors(
    temperatureColor,
    temperatureWeight,
    weatherColor,
    weatherWeight
  );

  // Establecer el color del fondo
  document.documentElement.style.setProperty('--weather', combinedColor);
};

// Función para combinar dos colores con pesos dados
const blendColors = (color1, weight1, color2, weight2) => {
  const r1 = parseInt(color1.substr(1, 2), 16);
  const g1 = parseInt(color1.substr(3, 2), 16);
  const b1 = parseInt(color1.substr(5, 2), 16);

  const r2 = parseInt(color2.substr(1, 2), 16);
  const g2 = parseInt(color2.substr(3, 2), 16);
  const b2 = parseInt(color2.substr(5, 2), 16);

  const r = Math.round(r1 * weight1 + r2 * weight2);
  const g = Math.round(g1 * weight1 + g2 * weight2);
  const b = Math.round(b1 * weight1 + b2 * weight2);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
    .toString(16)
    .padStart(2, '0')}`;
};
