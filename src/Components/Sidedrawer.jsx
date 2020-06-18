import React from "react";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";
import classes from "./Sidedrawer.module.css";
import Backdrop from "./Backdrop";

const Sidedrawer = (props) => {
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={classes.Sidedrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default Sidedrawer;
