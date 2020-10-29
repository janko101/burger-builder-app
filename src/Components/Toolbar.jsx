import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuth={props.isAuth} />
      </nav>
    </header>
  );
};

export default Toolbar;
