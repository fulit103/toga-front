import React from 'react';
import '../Shop.scss';
import plusImg from '../../../assets/static/items/plus.png';
import lessImg from '../../../assets/static/items/less.png';
import platoImg from '../../../assets/static/items/plato-1.png';

const ItemShop = (props) => {
  const {nombre, valor} = props;
  return (
    <div className='item'>
      <div className='product'>
        <div className='pic__item'>
          <img src={platoImg} alt='' />
        </div>
        <div className='name__item'>
          <p>{nombre}</p>
        </div>
      </div>
      <div className='product_price'>
        <div className='plus'>
          <img src={plusImg} alt='' />
        </div>
        <div className='price'>
          <p>${valor}</p>
        </div>
        <div className='less'>
          <img src={lessImg} alt='' />
        </div>
      </div>
    </div>
  )
}

export default ItemShop;

