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
    const initialCount = this.state.ingredients[type];
    if (initialCount <= 0) {
      return;
    }
    const deductingIngredient = initialCount - 1;
    const removedIngredient = {
      ...this.state.ingredients,
    };
    removedIngredient[type] = deductingIngredient;

    const oldPrice = this.state.totalPrice;
    const deductedPrice = oldPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: removedIngredient,
      totalPrice: deductedPrice,
    });
  };

  render() {
    const disabledButton = {
      ...this.state.ingredients,
    };

    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0;
    }

    return (
      <>
        <Burger
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
        />
        <BuildControls
          addedIngredient={this.addingIngredientHandler}
          removedIngredient={this.removeIngredientHandler}
          disabled={disabledButton}
        />
      </>
    );
  }
}

export default BurgerBuilder;
