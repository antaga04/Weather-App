import React from 'react';

const BurgerButton = ({ isMenuOpened, setIsMenuOpened }) => {
  const handleBurgerClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <div
      className={`burger-container ${isMenuOpened ? 'menu-opened' : ''}`}
      onClick={handleBurgerClick}
    >
      <div id="burger">
        <div className="bar topBar"></div>
        <div className="bar btmBar"></div>
      </div>
    </div>
  );
};

export default BurgerButton;
