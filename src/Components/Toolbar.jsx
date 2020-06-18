import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div onClick={props.clicked}>Menu</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
