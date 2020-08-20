import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink to="/" exact activeClassName={classes.active}>
        Burger Builder
      </NavLink>
      <NavLink to="/orders" activeClassName={classes.active}>
        Orders
      </NavLink>
    </li>
  </ul>
);

export default NavigationItems;
