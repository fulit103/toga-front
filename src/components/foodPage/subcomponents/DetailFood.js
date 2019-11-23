import React from 'react';
import Collapsible from 'react-collapsible';
import './DetailFood.scss';

const DetailFood = () => {
  return (
    <div className='detail-food-container'>
      <Collapsible trigger="Ingredientes">
          <p>This is the collapsible content. It can be any element or React component you like.</p>          
      </Collapsible>
      <Collapsible trigger="Instrucciones">
        <p>This is the collapsible content. It can be any element or React component you like.</p>        
      </Collapsible>
      <Collapsible trigger="Información nutricional">
        <p>This is the collapsible content. It can be any element or React component you like.</p>        
      </Collapsible>
    </div>
  )
}

export default DetailFood;