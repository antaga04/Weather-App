import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import ToggleButton from '../ToggleButton/ToggleButton';
import DateComponent from '../DateComponent/DateComponent';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header>
      <DateComponent />
      <NavBar />
      <ToggleButton />
      <BurgerMenu />
    </header>
  );
};

export default Header;
