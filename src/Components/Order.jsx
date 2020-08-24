import React from "react";
import classes from "./Order.module.css"

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingedients: </p>
      <p>
        Price: <strong>{props.price.toFixed(2)} SEK</strong>{" "}
      </p>
    </div>
  );
};

export default Order;
