import React from 'react';
import './KindItem.scss';
import { connect } from 'react-redux';
import {setFilterKindSelected} from '../../../actions/index';
import kindFood from '../../../assets/static/categories/icons8-donut-128.png';

const KindItem = (props) => {
  const { name, selected_kind, _id, url } = props; 

  const handleClick = (event) => {
    props.setFilterKindSelected(_id)
  }

  return (
    <section className='food__kind__category' onClick={handleClick} style={{backgroundColor: selected_kind===_id?'#7167EB':'white',color:selected_kind===_id?'white':'#3D369E' }}>
      <figure className='food__kind_img'>
        <img src={kindFood} alt='comida caliente' />
      </figure>
      <p className='food__kind__subtitle'>
        {name}
      </p>
    </section>
  );
};

const mapDispatchToProps = {
  setFilterKindSelected 
}

export default connect(null, mapDispatchToProps)(KindItem);