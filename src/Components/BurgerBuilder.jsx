import React, { Component } from "react";
import Burger from "./Burger";
import BuildControls from "./BuildControls";

const INGREDIENT_PRICES = {
  meat: 10,
  cheese: 7,
  bacon: 8,
  salad: 3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 40,
  };

  addingIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const initialPrice = this.state.totalPrice;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = initialPrice + ingredientPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    const initialCount = this.state.ingredients[type]
    const deductingIngredient = initialCount - 1
    const removedIngredient = {
      ...this.state.ingredients
    }
    removedIngredient[type] = deductingIngredient
    this.setState({ingredients: removedIngredient})
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addedIngredient={this.addingIngredientHandler}
          removedIngredient={this.removeIngredientHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
