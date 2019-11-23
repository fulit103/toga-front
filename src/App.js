import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Home from './components/home/Home';
import FoodPage from './components/foodPage/FoodPage';

function App() {
  return (
    <BrowserRouter>    
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/food/:id' component={FoodPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
