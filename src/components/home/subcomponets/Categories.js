import React from 'react';
import './Categories.scss';

const Categories = ({ children }) => (
  <div className='food'>
    <div className='food__title'>
      <h1>Disfruta hacer tus Comidas</h1>
      <label>¿Qué quieres preparar hoy?</label>
    </div>
    {children}
  </div>
);

export default Categories;