import React from 'react';
import pizzaImg from '../../../assets/static/recipe/pizza.png';
import '../StepPage.scss';

const StepContent = () => {
  return (
    <div className='content'>
      <div className='instruction__pic '>
        <img src={pizzaImg} alt='' />
      </div>
      <div className='instructions'>
        <p>En un bol ponemos todos los ingredientes de la masa: harina, agua, levadura, aceite y sal y mezclamos bien con una cuchara. Una masa de pizza es como un pan sencillo. Se puede hacer con cualquier tipo de harina y la cantidad de agua será aproximadamente de la mitad de la de harina. Si usamos una harina con más cantidad de gluten (harina de fuerza) entonces necesitaremos algo más de agua y si utilizamos una harina normal (como la de hoy) con la mitad de agua (por harina) y un poco más será suficienteEn un bol ponemos todos los ingredientes de la masa: harina, agua, levadura, aceite y sal y mezclamos bien con una cuchara. Una masa de pizza es como un pan sencillo. Se puede hacer con cualquier tipo de harina y la cantidad de agua será aproximadamente de la mitad de la de harina. Si usamos una harina con más cantidad de gluten (harina de fuerza) entonces necesitaremos algo más de agua y si utilizamos una harina normal (como la de hoy) con la mitad de agua (por harina) y un poco más será suficiente </p>
      </div>
    </div>
  );
};

export default StepContent