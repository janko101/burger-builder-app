import React, { Component } from "react";
import Button from "./Button";

class OrderSummary extends Component {
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li id={igKey} key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <>
        <h3 id="order-summary">Order Summary</h3>
        <p>You ordered a delicous Burger with following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p id="price">
          To Pay:
          <strong> {this.props.totalPrice.toFixed(2)} SEK</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button id="cancel" buttonType="Danger" clicked={this.props.cancelPurchase}>
          CANCEL
        </Button>
        <Button
          id="confirm"
          buttonType="Success"
          clicked={this.props.confirmPurchase}
        >
          CONFIRM
        </Button>
      </>
    );
  }
}

export default OrderSummary;
