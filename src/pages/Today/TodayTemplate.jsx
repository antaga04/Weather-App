import React from 'react';
import {
  ArrowCircleIcon,
  CloudSolidIcon,
  GaugeIcon,
  HumidityIcon,
  SunriseIcon,
  Sunset,
  VisibilityIcon,
  WindIcon,
} from '../../components/Icons/Icons';
import Detail from '../../components/Detail/Detail';
import { transformTemperature, utcToLocal } from '../../utils/functions';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext';
import { WeatherIcon } from '../../components/Icons/WeatherIcon';
import { useCity } from '../../contexts/CityContext';
import useWeatherColorSetter from '../../hooks/useWeatherColorSetter';

const TodayTemplate = ({ weatherData }) => {
  const { unit } = useTemperatureUnit();
  const { selectedCity } = useCity();

  useWeatherColorSetter(weatherData, weatherData.weather[0].description);

  const data = {

  }

  return (
    <>
      <div className="overview">
        <div className="info animation">
          <h1>{selectedCity.label === 'My Location' ? weatherData.name : selectedCity.label}</h1>
          <h2>{weatherData.weather[0].description}</h2>
          <div className="info-temp">
            <p id="temp">{transformTemperature(weatherData.main.temp, unit, true)}</p>
            <p id="feeling">/Feels like</p>
            <p id="feeling-temp">{transformTemperature(weatherData.main.feels_like, unit, true)}</p>
          </div>
          <div className="info-max-min">
            <p>↑ {transformTemperature(weatherData.main.temp_max, unit, true)}</p>
            <span className="temp-divider">~</span>
            <p>↓ {transformTemperature(weatherData.main.temp_min, unit, true)}</p>
          </div>
        </div>
        <WeatherIcon code={weatherData.weather[0].icon} css="icon fadeInAnimation" />
      </div>
      <div className="today-details animation">
        <Detail title={'Sunrise'} info={utcToLocal(weatherData?.sys.sunrise, weatherData?.timezone)} icon={SunriseIcon} />
        <Detail title={'Sunset'} info={utcToLocal(weatherData?.sys.sunset, weatherData?.timezone)} icon={Sunset} />
        <Detail title={'Humidity'} info={`${weatherData?.main.humidity}%`} icon={HumidityIcon} />
        <Detail
          title={'Visibility'}
          info={`${weatherData?.visibility / 1000}km`}
          icon={VisibilityIcon}
        />
        <Detail
          title={'Wind'}
          info={`${Math.round(weatherData?.wind.speed * 3.6)}km/h`}
          icon={WindIcon}
        />
        <Detail
          title={'Degree'}
          info={`${weatherData?.wind.deg}º`}
          icon={ArrowCircleIcon}
          rotate={weatherData?.wind.deg}
        />
        <Detail title={'Clouds'} info={`${weatherData?.clouds.all}%`} icon={CloudSolidIcon} />
        <Detail title={'Pressure'} info={`${weatherData?.main.pressure}hPa`} icon={GaugeIcon} />
      </div>
    </>
  );
};

export default TodayTemplate;
