import React from 'react';
import './Card.css';

const Card = ({children, boxShadow}) => {
  return (
    <div className="container-card">
      <div className="glare-item-top outer-edge"></div>
      <div className={`window-outline ${boxShadow}`}>
        <div className="glare-item-top card-inner"></div>
        <div className="window-main">{children}</div>
      </div>
    </div>
  );
};

export default Card;
