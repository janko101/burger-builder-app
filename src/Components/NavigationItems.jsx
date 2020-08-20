import React from "react";
import { NavLink } from "react-router-dom"
import classes from "./NavigationItems.module.css";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink to="/">Burger Builder</NavLink>
      <NavLink to="/orders">Orders</NavLink>
    </li>
  </ul>
);

export default NavigationItems;
