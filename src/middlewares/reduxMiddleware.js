import { SET_FOOD_SELECTED } from '../actions-types/index';

export const logger = store => next => action => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const saveLocalStorage = (store) => (next) => (action) => {
  
  if( action.type === SET_FOOD_SELECTED){
    const result = next(action);
    localStorage.setItem('food_selected', JSON.stringify(store.getState().food_selected));
    return result;
  }
  
  return next(action);
}