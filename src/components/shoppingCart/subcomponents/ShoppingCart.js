import React from 'react';
import { Link } from 'react-router-dom';
import backImg from '../../../assets/static/items/back.png';
import plusImg from '../../../assets/static/items/plus.png';
import lessImg from '../../../assets/static/items/less.png';
import '../Shop.scss';

const ShoppingCart = (props) => {
  const { children} = props;
  
  const redirectToAddress = () => {
    console.log('address');
    //this.props.history.push('/address');
  }

  return (
    <div className='screen'>
        <div className='order__title'>
          <div className='Arrow__back_s'>
            <Link to='/food'>
              <img src={backImg} alt='' />
            </Link>
          </div>
          <div className='myorden'>
            <h1>Mi orden</h1>
          </div>
        </div>
        <div className='orden__list'>
          <div className='order__list_numerpeople'>
            <div className='personas'>
              <p>Número de Personas</p>
            </div>
            <div className='add__people'>
              <img src={plusImg} alt='mas' />
              <p>    1      </p>
              <img src={lessImg} alt='menos' />
            </div>
          </div>
          <div className='order__list__title'>
            <h2>Ingredientes</h2>
          </div>
          {children}
          <div className='total'>
            <div className='total__items'>
              <div className='total__item--number'>
                <h3> Total </h3>
              </div>
              <div className='total__item--price'>
                <p>$65.000</p>
              </div>
            </div>
          </div>        
        </div>
        <div className='button__want'>
          <button className='button__buy' onClick={ ()=>redirectToAddress() }>
            ¡Lo quiero!
          </button>
        </div>
      </div>
  )
}

export default ShoppingCart;