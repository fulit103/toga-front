import React from 'react';
import './Categories.scss';

const Categories = ({ children }) => (
  <div className='food'>
    <div className='food__title'>
      <h1>Hora del desayuno</h1>
      <label>Que quieres comer hoy</label>
    </div>
    {children}
  </div>
);

export default Categories;