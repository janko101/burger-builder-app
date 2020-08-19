import React, { Component } from "react";
import CheckoutSummary from "./CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 1,
      bacon: 1,
      salad: 1,
    },
  };

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
      </div>
    );
  }
}

export default Checkout;
