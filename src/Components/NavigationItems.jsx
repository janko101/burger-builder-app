import React from "react";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <a href="/" className={classes.active}>Burger Builder</a>
      <a href="/">Checkout</a>
    </li>
  </ul>
);

export default NavigationItems;
