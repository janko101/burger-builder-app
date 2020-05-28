import React, { Component } from 'react';
import Burger from './Burger'
import BuildControls from './BuildControls';

const INGREDIENT_PRICES = {
  meat: 10,
  cheese: 7,
  bacon: 8,
  salad: 3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 40
  }


  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </>
    );
  }
}

export default BurgerBuilder;
