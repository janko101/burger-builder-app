import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  const btnId = `${props.label}`
  
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.More} id={btnId} onClick={props.added}>
        More
      </button>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
    </div>
  );
};

export default BuildControl;
