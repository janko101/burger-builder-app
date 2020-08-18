import React from 'react';
import Burger from './Burger'
import Button from './Button';

const CheckoutSummary = (props) => {
  return (
    <div>
      <h1>Hope it's Burgerlicious :))</h1>
      <div style={{height: '300px', width: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button buttonType='Danger' clicked>Cancel</Button>
      <Button buttonType='Success' clicked>Continue</Button>
    </div>
  );
}

export default CheckoutSummary;
