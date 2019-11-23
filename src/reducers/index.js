import {
  SET_FOOD_SELECTED,
  SET_SHOPPING_CART,
  SET_FILTER_TEXT_SEARCH, 
  SET_FILTER_KIND_SELECTED,
  SET_KINDS
} from '../actions-types/index';

const reducer = (state, action) => {
  switch(action.type){
    case SET_FOOD_SELECTED:
      return {
        ...state,
        food_selected: state.foods.filter(i => i.id===action.payload.foodId)[0]
      }
    case SET_SHOPPING_CART:
      return {
        ...state,
        shopping_cart: state.foods.filter(i => i.id===action.payload.foodId)[0].ingredientes
      }
    case SET_FILTER_TEXT_SEARCH:
      return {
        ...state,
        home_filter: { 
          ...state.home_filter,
          text_search: action.payload.text_search
        }
      }
    case SET_FILTER_KIND_SELECTED:
      return {
        ...state,
        home_filter: { 
          ...state.home_filter,
          kind: action.payload.kind
        }
      }
    case SET_KINDS:
      return {
        ...state,
        kinds: action.payload.kinds
      }
    default:
      return state;
  }
};

export default reducer;
