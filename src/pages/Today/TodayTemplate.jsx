import React, { useEffect } from 'react';
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
import { setWeatherColor, transformTemperature, utcToLocal } from '../../utils/functions';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext';
import { WeatherIcon } from '../../components/Icons/WeatherIcon';
import { useCity } from '../../contexts/CityContext';

const TodayTemplate = ({ weatherData }) => {
  const { unit } = useTemperatureUnit();
  const { selectedCity } = useCity();

  useEffect(() => {
    if (weatherData) {
      setWeatherColor(weatherData.main.temp, weatherData.weather[0].description);
    }
  }, [weatherData]);

  console.log(weatherData);

  return (
    <>
      <div className="overview">
        <div className="info">
          <h1>{selectedCity.label === 'My Location' ? weatherData.name : selectedCity.label}</h1>
          <h2>{weatherData.weather[0].description}</h2>
          <div className="info-temp">
            <p id="temp">{transformTemperature(weatherData.main.temp, unit)}</p>
            <p id="feeling">/Feels like</p>
            <p id="feeling-temp">{transformTemperature(weatherData.main.feels_like, unit)}</p>
          </div>
          <div className="info-max-min">
            <p>↑ {transformTemperature(weatherData.main.temp_max, unit)}</p>
            <span className="temp-divider">~</span>
            <p>↓ {transformTemperature(weatherData.main.temp_min, unit)}</p>
          </div>
        </div>
        <WeatherIcon code={weatherData.weather[0].icon} css="icon"/>
      </div>
      <div className="today-details">
        <Detail title={'Sunrise'} info={utcToLocal(weatherData?.sys.sunrise)} icon={SunriseIcon} />
        <Detail title={'Sunset'} info={utcToLocal(weatherData?.sys.sunset)} icon={Sunset} />
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
          title={'Wind Degree'}
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
