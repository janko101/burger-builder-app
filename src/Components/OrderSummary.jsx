import React from "react";
import Button from "./Button";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Order Summary</h3>
      <p>You ordered a delicous Burger with following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        To Pay:
        <strong> {props.totalPrice.toFixed(2)} SEK</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={props.cancelPurchase}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.confirmPurchase}>CONFIRM</Button>
    </>
  );
};

export default OrderSummary;
