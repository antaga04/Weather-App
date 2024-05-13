import React, { useEffect, useState } from 'react';
import './BurgerMenu.css';
import SearchBar from '../Searchbar/SearchBar';
import Footer from '../Footer/Footer';
import CityList from '../CityList/CityList';
import { useCity } from '../../contexts/CityContext';
import BurgerButton from '../BurgerButton/BurgerButton';

const BurgerMenu = () => {
  const [newCity, setNewCity] = useState('');
  const { updateSelectedCity } = useCity();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpened]);

  const handleOnSearchChange = (searchData) => {
    updateSelectedCity(searchData);
    setNewCity(searchData);
    closeMenu();
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      <BurgerButton isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <aside id="search-bar" className={`${isMenuOpened ? 'menu-opened' : ''}`}>
        <div className={`window ${isMenuOpened ? 'menu-opened' : ''}`}>
          <SearchBar onSearchChange={handleOnSearchChange} />
          <div className="w-container">
            <CityList newCity={newCity} setNewCity={setNewCity} closeMenu={closeMenu} />
            <Footer />
          </div>
        </div>
      </aside>
    </>
  );
};

export default BurgerMenu;
