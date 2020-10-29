import React, { Component } from "react";
import { connect } from "react-redux";
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
        <Toolbar
          isAuth={this.props.isAuth}
          clicked={this.openSidedrawerHandler}
        />
        <Sidedrawer
          isAuth={this.props.isAuth}
          open={this.state.showSidedrawer}
          closed={this.closeSidedrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
