import React from 'react';
import './BaseLayout.scss';

const BaseLayout = ({children}) => {
  return (
    <div className='base-container'>
      <div className='base-container__header'>
        
      </div>
      <div className='base-container__content'>
        <div className='base-container__center'>
          {children}
        </div>
      </div>
    </div>
  )
};

export default BaseLayout;