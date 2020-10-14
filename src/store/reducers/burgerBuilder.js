import * as actionTypes from "../actions/actionTypes";
import { UpdateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 40,
  error: false,
};

const INGREDIENT_PRICES = {
  meat: 10,
  cheese: 7,
  bacon: 8,
  salad: 3,
};

const addIngredient = (state, action) => {
  const updateIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = UpdateObject(state.ingredients, updateIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return UpdateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updateIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = UpdateObject(state.ingredients, updateIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
  };
  return UpdateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return UpdateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      cheese: action.ingredients.cheese,
      bacon: action.ingredients.bacon,
      meat: action.ingredients.meat,
    },
    totalPrice: 40,
    error: false,
  });
};

const fetchIngredients = (state) => {
  return UpdateObject(state, { error: true });
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredients(state);
    default:
      return state;
  }
};

export default rootReducer;
