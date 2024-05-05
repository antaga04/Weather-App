import React from 'react';
import './Days.css';
import Day from '../../components/Day/Day';
import { CloudSolidIcon, SunIcon } from '../../components/Icons/Icons';

const Days = () => {
  return (
    <main className="days-section">
      <h1>Bialystok, PL</h1>
      <div className="days">
        <Day day="WED" icon={SunIcon} />
        <Day day="THU" icon={CloudSolidIcon} />
        <Day day="FRI" icon={SunIcon} />
        <Day day="SAT" icon={CloudSolidIcon} />
        <Day day="SUN" icon={SunIcon} />
      </div>
    </main>
  );
};

export default Days;
