import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink to="/" exact activeClassName={classes.active}>
        Burger Builder
      </NavLink>
      <NavLink to="/orders" activeClassName={classes.active}>
        Orders
      </NavLink>
      {props.isAuth ? (
        <NavLink to="/logout" activeClassName={classes.active}>
          Sign Out
        </NavLink>
      ) : (
        <NavLink to="/auth" activeClassName={classes.active}>
          Sign In
        </NavLink>
      )}
    </li>
  </ul>
);

export default NavigationItems;
