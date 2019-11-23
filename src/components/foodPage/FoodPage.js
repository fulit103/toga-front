import React from 'react';
import { connect } from 'react-redux';
import { setShoppingCart } from '../../actions/index';
import likeImg from '../../assets/static/items/corazon.png';
import pizzaImg from '../../assets/static/recipe/pizza.png';
import backImg from '../../assets/static/items/back.png';
import { Link, useHistory } from 'react-router-dom';
import ReactStars from 'react-stars';
import DetailFood from './subcomponents/DetailFood';
import './FoodPage.scss';

const FoodPage = (props) => {
  const {food} = props;
  const history = useHistory();

  const handlerClick = () => {
    props.setShoppingCart(food.id)
    history.push(`/food/${food.id}/shop`)
  }

  return (
    <div className='body'>
      <div className='container_recipe'>
        <div className='container_recipe__header'>
          <div className='recipe_header_m'>
            <div className='Arrow__back_recipe'>
              <Link to='/'>
                <img src={backImg} alt='' />
              </Link>
            </div>
            <div className='recipe_title' />
          </div>
          <div className='main__food  picture'>
            <img src={pizzaImg} alt='pic_recipe' width='80%' />
          </div>
          <div className='step_like'>

            <div className='corazon'>
              <button>
                <img src={likeImg} alt='Icon like' />
              </button>
            </div>
            <Link to='/step'>
              <div className='step-by-step'>
                <button type='button' className='button-primary'>Paso a paso</button>
              </div>
            </Link>
          </div>
        </div>
        <div className='food-info'>
          <div className='recipe_title'>
            <div className='recipe_title'>
              <h1>{food.title}</h1>
            </div>
            <label>{food.description}</label>
            <ReactStars
              className='stars'
              count={5}
              size={24}
              color2='#50d0e3'
              // '#ffd700'
            />
          </div>

          <div className='inf-box instructions'>
            <DetailFood />
            
          </div>

          <div className='div-button-buy'>
            
            <button className='button-primary' onClick={()=>handlerClick()}>
              Comprar Ingredientes
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {    
    food: state.food_selected,
  };
};

const mapDispatchToProps = {
  setShoppingCart 
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodPage);