import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useCity } from '../../contexts/CityContext';

const NavBar = () => {
  // const { selectedCity } = useCity();

  return (
    <nav className="navBar">
      <ul className="navList">
        <li>
          <NavLink to={`/`}>Today</NavLink>
        </li>
        <li>
          <NavLink to={`/hours`}>Hours</NavLink>
        </li>
        <li>
          <NavLink to={`/days`}>Days</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
