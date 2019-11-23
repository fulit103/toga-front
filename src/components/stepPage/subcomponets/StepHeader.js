import React from 'react';
import { Link } from 'react-router-dom';
import backImg from '../../../assets/static/items/back.png';
import '../StepPage.scss';

const StepHeader = () => {
  return (
    <div className='header_m'>
      <div className='Arrow__back'>
        <Link to='/food'>
          <img src={backImg} alt='' />
        </Link>
      </div>
      <div className='step__step'>
        <h3> 8 de 10 </h3>
      </div>
      <div className='ingredients'>
        <h4>Ingredientes </h4>
      </div>
    </div>
  );
};

export default StepHeader;

