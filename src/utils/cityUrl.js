export const CITY_PARAM = 'city';
export const LAT_PARAM = 'lat';
export const LON_PARAM = 'lon';

const isValidCoordinate = (value, limit) => {
  if (value === null || value.trim() === '') return false;
  const number = Number(value);
  return Number.isFinite(number) && Math.abs(number) <= limit;
};

export const cityFromParams = (label, lat, lon) => {
  if (!isValidCoordinate(lat, 90) || !isValidCoordinate(lon, 180)) return null;
  return { label: label?.trim() || `${lat}, ${lon}`, value: `${lat} ${lon}` };
};

export const cityToSearchParams = (city, searchParams) => {
  const params = new URLSearchParams(searchParams);
  const [lat, lon] = city.value.split(' ');
  params.set(CITY_PARAM, city.label);
  params.set(LAT_PARAM, lat);
  params.set(LON_PARAM, lon);
  return params;
};

export const isSameCity = (a, b) => !!a && !!b && a.label === b.label && a.value === b.value;
