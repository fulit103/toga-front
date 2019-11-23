import React from 'react';
import './FoodScroll.scss';

const FoodScroll = ({children}) => {
  return (
    <section className='food__scroll'>
      {children}
    </section>
  );
};

export default FoodScroll;