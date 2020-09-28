import React, { Component } from "react";
import { connect } from "react-redux"
import Burger from "./Burger";
import BuildControls from "./BuildControls";
import Modal from "./Modal";
import OrderSummary from "./OrderSummary";
import axios from "../axios-orders";
import Spinner from "./Spinner";
import withErrorHandler from "./withErrorHandler";
import * as actionTypes from "../store/actions"

class BurgerBuilder extends Component {
  state = {
    ordering: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get("https://burger-builder-react-4b801.firebaseio.com/ingredients.json")
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: error });
    //   });
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
    return sum > 0;
  };

  render() {
    const disabledButton = {
      ...this.props.ings,
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

    if (this.props.ings) {
      burger = (
        <>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            addedIngredient={this.props.onIngredientAdded}
            removedIngredient={this.props.onIngredientRemoved}
            disabled={disabledButton}
            totalPrice={this.props.price}
            purchasable={this.updatePurchasable}
            ordered={this.purchaseHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          totalPrice={this.props.price}
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
