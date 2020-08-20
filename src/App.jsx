import React, { Component } from "react";
import { Route } from "react-router-dom"
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";
import Checkout from "./Components/Checkout";
import Orders from "./Components/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
          <Route path="/" exact component={BurgerBuilder}/> 
          <Route path="/checkout" component={Checkout}/> 
          <Route path="/orders" component={Orders}/> 
        </Layout>
      </div>
    );
  }
}

export default App;
