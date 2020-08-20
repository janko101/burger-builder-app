import React from "react";
import classes from "./Order.module.css"

const Order = () => {
  return (
    <div className={classes.Order}>
      <p>Ingedients: </p>
      <p>
        Price: <strong>80 SEK</strong>{" "}
      </p>
    </div>
  );
};

export default Order;
