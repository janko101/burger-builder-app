import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem} >
      <NavLink to="/" exact activeClassName={classes.active}>
        Burger Builder
      </NavLink>
      {props.isAuth ? (
        <NavLink to="/orders" activeClassName={classes.active}>
          Orders
        </NavLink>
      ) : null}
      {props.isAuth ? (
        <NavLink to="/logout" activeClassName={classes.active}>
          Sign Out
        </NavLink>
      ) : (
        <NavLink to="/auth" activeClassName={classes.active} id="signin">
          Sign In
        </NavLink>
      )}
    </li>
  </ul>
);

export default NavigationItems;
