import React, { Component } from "react";
import { Route } from "react-router-dom"
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";
import Checkout from "./Components/Checkout";
import Orders from "./Components/Orders";
import Auth from "./Components/Auth"
import Logout from "./Components/Logout"

class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
          <Route path="/" exact component={BurgerBuilder}/> 
          <Route path="/checkout" component={Checkout}/> 
          <Route path="/orders" component={Orders}/> 
          <Route path="/auth" component={Auth}/> 
          <Route path="/Logout" component={Logout}/> 
        </Layout>
      </div>
    );
  }
}

export default App;
