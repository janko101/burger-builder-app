import React, { Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from "./Toolbar";
import Sidedrawer from "./Sidedrawer";

class Layout extends Component {
  render () {
    return (
      <>
      <Toolbar />
      <Sidedrawer />
      <main className={classes.Content}>{this.props.children}</main>
    </>
    )
  }
} 

export default Layout;
