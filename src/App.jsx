import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "./Components/AsyncComponent"
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";
import * as actions from "./store/actions/index";

const asyncCheckout = asyncComponent(() => {
  return import('./Components/Checkout')
})

const asyncOrders = asyncComponent(() => {
  return import('./Components/Orders')
})

const asyncAuth = asyncComponent(() => {
  return import('./Components/Auth')
})

const asyncLogout = asyncComponent(() => {
  return import('./Components/Logout')
})

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignUp();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" component={asyncAuth} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/Logout" component={asyncLogout} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
