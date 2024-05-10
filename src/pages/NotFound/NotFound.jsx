import React from 'react';
import './NotFound.css';
import Card from '../../components/Card/Card';
import { CloudLightiningIcon } from '../../components/Icons/Icons';

const NotFound = () => {
  return (
    <main id="notfound" className="flex-center">
      <Card boxShadow={'boxShadow'}>
        <div className="notfound">
          <h1>Error 404</h1>
          <h2>PAGE NOT FOUND</h2>
          <p>It seems you might be lost. Find your way back to the home page!</p>
          <div className="flex-center">
            <CloudLightiningIcon />
          </div>
          <a href="/" className="panEffect flex-center">
            ---- HOME ----
          </a>
        </div>
      </Card>
    </main>
  );
};

export default NotFound;
