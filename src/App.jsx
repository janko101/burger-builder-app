import React, { Component } from "react";
import { Route } from "react-router-dom"
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";
import Checkout from "./Components/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
          <Route path="/" exact component={BurgerBuilder}/> 
          <Route path="/checkout" component={Checkout}/> 
        </Layout>
      </div>
    );
  }
}

export default App;
