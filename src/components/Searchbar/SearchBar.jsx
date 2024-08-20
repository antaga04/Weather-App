import React, { useState } from 'react';
import './SearchBar.css';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, GEO_POPULATION, geoApiOptions } from '../../services/api';

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=${GEO_POPULATION}&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const response_1 = await response.json();
      return {
        options: response_1?.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      return console.error(error);
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <>
      <AsyncPaginate
        placeholder="Search for city..."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="async-paginate"
      />
    </>
  );
};

export default SearchBar;
