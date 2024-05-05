import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useCity } from '../../contexts/CityContext';

const NavBar = () => {
  const { selectedCity } = useCity();

  return (
    <nav className="navBar">
      <ul className="navList">
        <li>
          <NavLink to={`/today/${selectedCity?.label}`}>Today</NavLink>
        </li>
        <li>
          <NavLink to={`/hours/${selectedCity?.label}`}>Hours</NavLink>
        </li>
        <li>
          <NavLink to={`/days/${selectedCity?.label}`}>Days</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
