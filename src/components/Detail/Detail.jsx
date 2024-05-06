import React from 'react';
import './Detail.css';
import Card from '../Card/Card';

const Detail = ({ title, info, icon, rotate }) => {
  return (
    <Card boxShadow="boxShadow">
      <div className="window-content">
        <div className="detail-title">
          <h3>{title}</h3>
        </div>
        <div className="inner-details">
          <div style={{ transform: `rotate(${rotate}deg)` }}>{icon()}</div>
          <p>{info}</p>
        </div>
      </div>
    </Card>
  );
};

export default Detail;
