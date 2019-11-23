import { 
  SET_FOOD_SELECTED, 
  SET_SHOPPING_CART, 
  SET_FILTER_TEXT_SEARCH, 
  SET_FILTER_KIND_SELECTED, 
  SET_KINDS 
} from '../actions-types/index';

export function setFoodSelected(foodId) {
  return {
    type: SET_FOOD_SELECTED,
    payload: {
      foodId
    }
  }
}

export function setShoppingCart(foodId){
  return {
    type: SET_SHOPPING_CART,
    payload: {
      foodId
    }
  }
}

export function setFilterTextSearch(text){
  return {
    type: SET_FILTER_TEXT_SEARCH,
    payload: {
      text_search: text
    }
  }
}

export function setFilterKindSelected(kindId){
  return {
    type: SET_FILTER_KIND_SELECTED,
    payload: {
      kind: kindId
    }
  }
}

export function setKinds(kinds){
  return {
    type: SET_KINDS,
    payload: {
      kinds
    }
  }
}