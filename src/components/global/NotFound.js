import React from 'react';
import errorImg from '../../assets/static/icon/404.png';
import './NotFound.scss';

const Nofound = () => (
  <div className='notfound'>
    <h1 className='tittle_error'>Ups... esta receta aun no esta disponible</h1>
    <img src={errorImg} alt='error 404' />
  </div>
);

export default Nofound;
