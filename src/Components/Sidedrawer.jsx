import React from "react";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";
import classes from "./Sidedrawer.module.css";
import Backdrop from "./Backdrop";

const Sidedrawer = (props) => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </>
  );
};

export default Sidedrawer;
