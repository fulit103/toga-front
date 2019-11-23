import React from 'react';
import StepHeader from './subcomponets/StepHeader';
import StepContent from './subcomponets/StepContent';
import './StepPage.scss';

const StepPage = () => {
  return (
    <div className='steps'>      
      <div className='container'>
        <StepHeader />
        <StepContent />        
      </div>
    </div>
  ); 
}

export default StepPage;