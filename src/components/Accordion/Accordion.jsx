import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <ul className="accordion-wrapper">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: index === openIndex,
          onClick: () => handleClick(index),
          idx: index,
        })
      )}
    </ul>
  );
};

export default Accordion;
