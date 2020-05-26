import React from 'react';
import classes from './Burger.module.css'
import Ingredient from './Ingredient';

const Burger = () => {
  return (
    <div className={classes.Burger}>
      <Ingredient type='bread-top'/>
      <Ingredient type='salad'/>
      <Ingredient type='bacon'/>
      <Ingredient type='cheese'/>
      <Ingredient type='meat'/>
      <Ingredient type='bread-bottom'/>
    </div>
  );
}

export default Burger;
