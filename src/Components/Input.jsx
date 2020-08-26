import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement;
  const inputClass = [classes.InputElement];
  if (props.invalid && props.hasValidation && props.touched) {
    inputClass.push(classes.Invalid);
  }
  let validationErrror;
  if (props.invalid && props.touched) {
    validationErrror = <alert>Invalid Entry!</alert>
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClass.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClass.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          className={inputClass.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClass.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationErrror}
    </div>
  );
};

export default Input;
