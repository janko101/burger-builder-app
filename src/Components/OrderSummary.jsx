import React from "react";

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
    </>
  );
};

export default OrderSummary;
