import React, { Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from "./Toolbar";
import Sidedrawer from "./Sidedrawer";

class Layout extends Component {
  state = {
    showSidedrawer: false,
  };

  closeSidedrawerHandler = () => {
    this.setState({ showSidedrawer: false });
  };

  openSidedrawerHandler = () => {
    this.setState((prevState) => {
      return { showSidedrawer: !prevState.Sidedrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar clicked={this.openSidedrawerHandler} />
        <Sidedrawer
          open={this.state.showSidedrawer}
          closed={this.closeSidedrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
