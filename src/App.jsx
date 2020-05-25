import React, { Component } from "react";
import Layout from "./Components/Layout";
import BurgerBuilder from "./Components/BurgerBuilder"

class App extends Component {
  render() {
    return (
    <div>
      <h1>Let's build some burgers!</h1>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
    )
  }
}

export default App;
