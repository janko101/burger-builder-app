import React, { Component } from "react";
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";
import Checkout from "./Components/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
          <BurgerBuilder /> 
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
