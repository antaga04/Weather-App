import React from 'react';
import './DateComponent.css';
import Card from '../Card/Card';
import { dayNames } from '../../utils/data';
import { localDate } from '../../utils/functions';

const DateComponent = () => {
  const currentDate = new Date();
  const dateInfo = localDate(currentDate);

  return (
    <Card>
      <div className="date">
        {window.innerWidth < 500 ? (
          <p className="small-screen-date">{`${dayNames[dateInfo.dayOfWeek]} ${dateInfo.day}.${
            dateInfo.month
          }`}</p>
        ) : (
          <p className="">{`${dayNames[dateInfo.dayOfWeek]} ${dateInfo.day}.${dateInfo.month}.${
            dateInfo.year
          }`}</p>
        )}
      </div>
    </Card>
  );
};

export default DateComponent;
