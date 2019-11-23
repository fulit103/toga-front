import React, {useEffect,useState} from 'react';
import Search from './subcomponets/Search';
import Categories from './subcomponets/Categories';
import KindItem from './subcomponets/KindItem';
import FoodItem from './subcomponets/FoodItem';
import FoodScroll from './subcomponets/FoodScroll';
import Types from './subcomponets/Types';
import { connect } from 'react-redux';
import {setFilterTextSearch, setKinds} from '../../actions/index';
import debounce from 'lodash/debounce';
import axios from 'axios';
import '../../App.scss';

const Home = (props) => {
  const { kinds, foods, home_filter } = props;  

  const handleChangeText = debounce(function (query) {    
    console.log(query)
    props.setFilterTextSearch(query)
  }, 1000);

  useEffect( () => {      
    
    const fetchData = async () => {
      let res1 = await axios.get("http://localhost:3000/api/kinds");  
      //let res2 = await axios.get("http://localhost:3000/api/foods")
      let { data } = res1;
      props.setKinds(data)
    }    

    fetchData();
    
  },[]);

  return (
    <div>
      <Search onChange={handleChangeText} text={home_filter.text_search}/>
      <Categories>
        <Types>
          {kinds.map((item) => 
            <KindItem  
              selected_kind={home_filter.kind} 
              key={item._id} 
              name={item.name} 
              url={item.url}
              _id={item._id}
            />
          )}
        </Types>
        <FoodScroll>
          { foods.map((item) => <FoodItem key={item.id} {...item} />)}
        </FoodScroll>
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    kinds: state.kinds,
    foods: state.foods,
    home_filter: state.home_filter
  };
};

const mapDispatchToProps = {
  setFilterTextSearch,
  setKinds
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);