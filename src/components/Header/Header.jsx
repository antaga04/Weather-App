import React, { useEffect, useState } from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import ToggleButton from '../ToggleButton/ToggleButton';
import DateComponent from '../DateComponent/DateComponent';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpened]);

  return (
    <header>
      <DateComponent />
      <NavBar />
      <ToggleButton />
      <div
        className={`burger-container ${isMenuOpened ? 'menu-opened' : ''}`}
        onClick={handleBurgerClick}
      >
        <div id="burger">
          <div className="bar topBar"></div>
          <div className="bar btmBar"></div>
        </div>
      </div>
      <BurgerMenu isMenuOpened={isMenuOpened} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
