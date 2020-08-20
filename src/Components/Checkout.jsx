import React, { Component } from "react";
import CheckoutSummary from "./CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 1,
      bacon: 1,
      salad: 1,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  cancelCheckoutHandler = () => {
    this.props.history.goBack();
  };

  confirmCheckoutHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.cancelCheckoutHandler}
          checkoutConfirmed={this.confirmCheckoutHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (<ContactData ingredients={this.state.ingredients} />)}
        />
      </div>
    );
  }
}

export default Checkout;
