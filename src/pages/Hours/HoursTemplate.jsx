import React from 'react';
import { useCity } from '../../contexts/CityContext';
import { convertHourToData } from '../../utils/functions';
import Accordion from '../../components/Accordion/Accordion';
import AccordionItem from '../../components/Accordion/AccordionItem';
import HourData from '../../components/HourData/HourData';
import useWeatherColorSetter from '../../hooks/useWeatherColorSetter';

const HoursTemplate = ({ weatherData }) => {
  const { selectedCity } = useCity();

  useWeatherColorSetter(weatherData, weatherData.list[0].weather[0].description);

  console.log('\nrender - HOURS TEMPLATE PAGE');

  return (
    <>
      <h1 className="fadeInAnimation">
        {selectedCity.label === 'My Location' ? weatherData.city.name : selectedCity.label}
      </h1>
      <Accordion>
        {weatherData.list.slice(0, 8).map((hour, idx) => (
          <AccordionItem key={idx}>
            <HourData data={convertHourToData(hour, weatherData.city.timezone)} />
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default HoursTemplate;
