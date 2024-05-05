import React from 'react';
import './Detail.css';
import Card from '../Card/Card';

const Detail = ({ title, info, icon }) => {
  return (
    <Card boxShadow="boxShadow">
      <div className="window-content">
        <div className="detail-title">
          <h3>{title}</h3>
        </div>
        <div className="inner-details">
          <div>{icon()}</div>
          <p>{info}</p>
        </div>
      </div>
    </Card>
  );
};

export default Detail;
