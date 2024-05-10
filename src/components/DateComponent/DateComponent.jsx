import React from 'react';
import './DateComponent.css';
import Card from '../Card/Card';
import { dayNames } from '../../utils/data';

const DateComponent = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  const dayOfWeek = currentDate.getDay();

  return (
    <Card>
      <div className="date">
        {window.innerWidth < 500 ? (
          <p className="small-screen-date">{`${dayNames[dayOfWeek]} ${day}.${month}`}</p>
        ) : (
          <p className="">{`${dayNames[dayOfWeek]} ${day}.${month}.${year}`}</p>
        )}
      </div>
    </Card>
  );
};

export default DateComponent;
