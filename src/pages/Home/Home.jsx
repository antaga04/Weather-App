import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Weather App</h1>
      <p>
        This is a website to <u>check the weather</u> in your current location. You can also check it from
        different places using the searching bar. After seaching a place you'll be able to add it to
        the list of favorites and you can remove any location clicking on the X button.
      </p>
      <p>
        There are 3 different pages to check the weather: Today, Hours and Days.
      </p>
    </div>
  );
};

export default Home;
