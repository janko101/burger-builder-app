import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  const ingredientsOutput = ingredients.map((ing) => {
    return (
      <span
        key={ing.name}
        style={{
          textTransform: "capitalize",
          margin: "0 8px",
          display: "inline-block",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {ing.name} ({ing.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingedients: {ingredientsOutput} </p>
      <p>
        Price: <strong>{props.price.toFixed(2)} SEK</strong>{" "}
      </p>
    </div>
  );
};

export default Order;
