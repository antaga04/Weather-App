export const fetchWeatherData = async (city, url) => {
  console.log('---- FETCH DATA ----');
  const [lat, lon] = city.value.split(' ');
  const newURL = `${url}/weather?lat=${lat}&lon=${lon}&appid=${'caf379e632edf690a9cc3fcae88cb02f'}&units=metric`;

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
