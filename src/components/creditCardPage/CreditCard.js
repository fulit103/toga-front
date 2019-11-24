import React from 'react';
import { Link } from 'react-router-dom';
import backImg from '../../assets/static/items/back.png';
import './CreditCard.scss';

const CreditCard = () => {
  return (
    <div className='body'>
      <div className='back'>
        <Link to='/shop' className='atras'>
          <img src={backImg} alt='' />
        </Link>
      </div>
      <div className='info_creditcard'>
        <div className='credit-card'>
          <div className='credit-card__logo'>Logo </div>

          <div className='credit-card__number'>
          1234 1232 2343 2134
          </div>

          <div className='credit-card__info'>
            <div className='credit-card__info_name'>
              <div className='credit-card__info_label'>Nombre</div>
              <div>Julian </div>
            </div>

            <div className='credit-card__info_expiry'>
              <div className='credit-card__info_label'>Valido hasta </div>
              <div>12/24</div>
            </div>
          </div>
        </div>
        <div className='form'>
            <input type='tel' name="credit-number"  id='' maxlength="19" placeholder='Digita el Nùmero' />
            <input type='text' name='' id='' placeholder='Digita el Nombre' />
            <input name="credit-cvc" class="cc-cvc" type="tel" pattern="\d*" maxlength="4" placeholder="CVC" />
            <input name="credit-expires" class="cc-expires" type="tel" pattern="\d*" maxlength="7" placeholder="MM / YY" />
          <div className='button_pay_res'>
            <Link to='/delivery' className='button_pay'>
                pagar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;



