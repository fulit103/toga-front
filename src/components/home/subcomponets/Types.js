import React from 'react';
import './Types.scss';

const Types = ({children}) => {
  return (
    <section className='food__kind'>
      {children}
    </section>
  )
};

export default Types;