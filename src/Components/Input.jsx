import React from "react";

const Input = (props) => {
  let inputElement;
  switch (props.inputType) {
    case "input":
      inputElement = <input {...props} />;
      break;
    case "textarea":
      inputElement = <textarea {...props} />;
      break;
    default:
      inputElement = <input {...props} />;
      break;
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
