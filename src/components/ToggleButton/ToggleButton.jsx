import React, { useState } from 'react';
import './ToggleButton.css';
import { useTemperatureUnit } from '../../contexts/TemperatureUnitContext.jsx';

const ToggleButton = () => {
  const { unit, toggleUnit } = useTemperatureUnit();

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleUnitChange = () => {
    setButtonDisabled(true);
    toggleUnit();

    setTimeout(() => {
      setButtonDisabled(false);
    }, 560);
  };

  console.log('render TOGGLE BUTTON');
  return (
    <>
      <button
        aria-label="Temperature switch"
        className={`${unit} temp-btn`}
        onClick={isButtonDisabled ? null : handleUnitChange}
        disabled={isButtonDisabled}
      >
        <div>
          <span className={`${unit} switch`}></span>
          <span id="celsius">ºC</span>
          <span id="fahrenheit">ºF</span>
        </div>
      </button>
    </>
  );
};

export default ToggleButton;
