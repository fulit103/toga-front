import React from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './subcomponents/ShoppingCart';
import ItemShop from './subcomponents/ItemShop';
import './Shop.scss';

const Shop = (props) => {
  const {ingredients} = props;
  return (
    <>
      <ShoppingCart>
        {ingredients.map( item => {
          return (
            <ItemShop nombre={item.nombre} key={item.id} valor={item.valor} />
          )
        })}        
      </ShoppingCart>
    </>
  );
}

const mapStateToProps = (state) => {
  return {    
    ingredients: state.shopping_cart,
  };
};

export default connect(mapStateToProps, null)(Shop);