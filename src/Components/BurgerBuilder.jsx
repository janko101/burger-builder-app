import React, { Component } from "react";
import Burger from "./Burger";
import BuildControls from "./BuildControls";
import Modal from "./Modal";
import OrderSummary from "./OrderSummary";

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
    purchasable: false,
    ordering: false,
  };

  purchaseHandler = () => {
    this.setState({ ordering: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ ordering: false });
  };

  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
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
    this.updatePurchasable(updatedIngredients);
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
    this.updatePurchasable(removedIngredient);
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
        <Burger ingredients={this.state.ingredients} />
        <Modal
          show={this.state.ordering}
          cancelPurchase={this.cancelPurchaseHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <BuildControls
          addedIngredient={this.addingIngredientHandler}
          removedIngredient={this.removeIngredientHandler}
          disabled={disabledButton}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
