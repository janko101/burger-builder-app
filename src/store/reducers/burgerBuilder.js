import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 40,
  error: false
};

const INGREDIENT_PRICES = {
  meat: 10,
  cheese: 7,
  bacon: 8,
  salad: 3,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]

      };
      case actionTypes.SET_INGREDIENTS:
        return {
          ...state,
          ingredients: {
            salad: action.ingredients.salad,
            cheese: action.ingredients.cheese,
            bacon: action.ingredients.bacon,
            meat: action.ingredients.meat,
          },
          totalPrice: 40,
          error: false
        };
      case actionTypes.FETCH_INGREDIENTS_FAILED:
        return {
          ...state,
          error: true
        };
    default:
      return state;
  }
};

export default rootReducer;
