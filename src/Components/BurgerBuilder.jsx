import React, { Component } from "react";
import Burger from "./Burger";
import BuildControls from "./BuildControls";
import Modal from "./Modal";
import OrderSummary from "./OrderSummary";
import axios from "../axios-orders";
import Spinner from "./Spinner";
import withErrorHandler from "./withErrorHandler";

const INGREDIENT_PRICES = {
  meat: 10,
  cheese: 7,
  bacon: 8,
  salad: 3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 40,
    purchasable: false,
    ordering: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://burger-builder-react-4b801.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  purchaseHandler = () => {
    this.setState({ ordering: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ ordering: false });
  };

  confirmPurchaseHandler = () => {
    const queryParams = []
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
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

    let orderSummary;

    let burger = this.state.error ? (
      <p>Error loading ingredients!</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          cancelPurchase={this.cancelPurchaseHandler}
          confirmPurchase={this.confirmPurchaseHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <>
        <Modal
          show={this.state.ordering}
          closeModal={this.cancelPurchaseHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
