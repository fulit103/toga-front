import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Home from './components/home/Home';
import FoodPage from './components/foodPage/FoodPage';
import Shop from './components/shoppingCart/Shop';
import CreditCard from './components/creditCardPage/CreditCard';
import AddressPage from './components/addressPage/AddressPage';
import BaseLayout from './layouts/BaseLayout';

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>    
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/food/:id' component={FoodPage} />
          <Route exact path='/food/:id/shop' component={Shop} />
          <Route exact path='/address' component={AddressPage} /> 
          <Route exact path='/pay' component={CreditCard} />        
        </Switch>
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
