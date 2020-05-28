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
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.addedIngredient(ctrl.type)}
        />
      ))}
    </div>
  );
};

export default BuildControls;
