import React, { useState } from 'react';

const AccordionItem = ({ children, isOpen, onClick, idx }) => {
  const [animationDelay, setAnimationDelay] = useState(0.2);

  console.log('render ACCORDION ITEM');
  return (
    <li
      style={{ animationDelay: `${animationDelay * (idx/2 + 0.75)}s` }}
      className={isOpen ? 'open' : ''}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default AccordionItem;
