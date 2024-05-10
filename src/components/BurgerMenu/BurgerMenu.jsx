import React, { useEffect, useState } from 'react';
import './BurgerMenu.css';
import SearchBar from '../Searchbar/SearchBar';
import Footer from '../Footer/Footer';
import CityList from '../CityList/CityList';
import { useCity } from '../../contexts/CityContext';

const BurgerMenu = ({ isMenuOpened, closeMenu }) => {
  const [newCity, setNewCity] = useState('');
  const { updateSelectedCity } = useCity();

  const handleOnSearchChange = (searchData) => {
    updateSelectedCity(searchData);
    setNewCity(searchData);
    closeMenu();
  };

  return (
    <>
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
