import * as actionTypes from "./actionTypes"
import axios from "../../axios-orders";

export const addIngredient = (ingName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName
  }
}

export const removeIngredient = (ingName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName
  }
}

export const fetchIngredients = (ingredients) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS,
    ingredients: ingredients
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const setIngredients = () => {
  return dispatch => {
    axios
    .get("https://burger-builder-react-4b801.firebaseio.com/ingredients.json")
    .then((response) => {
      dispatch(fetchIngredients(response.data))
    })
    .catch((error) => {
      dispatch(fetchIngredientsFailed())
    });

  }
}