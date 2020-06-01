import React from 'react';

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return <li>{igKey}: {props.ingredients[igKey]}</li>
  })

  return (
    <>
      <h3>Order Summary</h3>
      <p>You ordered a delicous Burger with following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
    </>
  );
}

export default OrderSummary;
