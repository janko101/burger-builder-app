import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "./Toolbar";
import Sidedrawer from "./Sidedrawer";

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <Sidedrawer />
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
