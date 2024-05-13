import React, { useState } from 'react';
import { ChevronDown } from '../Icons/Icons';
import { convertHourToData } from '../../utils/functions';
import AccordionItem from '../Accordion/AccordionItem';
import Accordion from '../Accordion/Accordion';
import HourData from '../HourData/HourData';

const DayHours = ({ selectedDay, setSelectedDay, dailyForecastInHours }) => {
  const [containerTransition, setContainerTransition] = useState(false);

  const handleGoBackOnClick = () => {
    if (selectedDay !== null) {
      setContainerTransition(true);
      setTimeout(() => {
        setSelectedDay(null);
        setContainerTransition(false);
      }, 350);
    }
  };

  console.log('\nrender DAYHOURS');

  return (
    <div
      className={`day-hours-container ${selectedDay !== null && 'active'} ${
        containerTransition && 'hide'
      }`}
    >
      {selectedDay !== null && (
        <div className="day-hours">
          <div className="header fadeInAnimation">
            <p className="day">
              {selectedDay === 0 ? 'Tomorrow' : dailyForecastInHours[selectedDay][0]}
            </p>
            <div className="back-btn" onClick={handleGoBackOnClick}>
              <ChevronDown />
              <p>Back</p>
            </div>
          </div>
          <Accordion>
            {dailyForecastInHours[selectedDay][1].map((hour, idx) => (
              <AccordionItem key={`day-${dailyForecastInHours[selectedDay][0]}-hour-${idx}`}>
                <HourData data={convertHourToData(hour)} />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default DayHours;
