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
import { utcToLocal } from '../../utils/functions';
import { WeatherIcon } from '../../components/Icons/WeatherIcon';
import useWeatherColorSetter from '../../hooks/useWeatherColorSetter';
import TodayInfo from '../../components/TodayInfo/TodayInfo';

const TodayTemplate = ({ weatherData }) => {
  useWeatherColorSetter(weatherData, weatherData.weather[0].description);

  console.log('\nrender - TODAY TEMPLATE PAGE');

  return (
    <>
      <div className="overview">
        <TodayInfo weatherData={weatherData} />
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
