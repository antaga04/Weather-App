import React from 'react';
import './NavBar.css';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  // Keep the city in the URL when switching sections.
  const { search } = useLocation();

  return (
    <nav className="navBar">
      <ul className="navList">
        <li>
          <NavLink to={{ pathname: '/', search }} aria-label="Link to Today page">Today</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: '/hours', search }} aria-label="Link to Hours page">Hours</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: '/days', search }} aria-label="Link to Days page">Days</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
