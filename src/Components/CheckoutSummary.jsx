import React from 'react';
import Burger from './Burger'
import Button from './Button';
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope it's Burgerlicious :))</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button buttonType='Danger' clicked>Cancel</Button>
      <Button buttonType='Success' clicked>Continue</Button>
    </div>
  );
}

export default CheckoutSummary;
