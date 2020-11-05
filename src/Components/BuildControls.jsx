import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p id="price">
        Total price: <strong>{props.totalPrice.toFixed(2)} SEK</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.addedIngredient(ctrl.type)}
          removed={() => props.removedIngredient(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        id="order-btn"
        onClick={props.ordered}
        disabled={!props.purchasable}
      >
        {props.isAuth ? "ORDER NOW" : "SIGN IN TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
