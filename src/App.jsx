import React, { Component } from "react";
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
          <BurgerBuilder /> 
        </Layout>
      </div>
    );
  }
}

export default App;
