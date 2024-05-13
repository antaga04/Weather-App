import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useCity } from '../../contexts/CityContext';

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li>
          <NavLink to={`/`} aria-label="Link to Today page">Today</NavLink>
        </li>
        <li>
          <NavLink to={`/hours`} aria-label="Link to Hours page">Hours</NavLink>
        </li>
        <li>
          <NavLink to={`/days`} aria-label="Link to Days page">Days</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
