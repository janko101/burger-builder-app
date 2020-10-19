import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import classes from "./Auth.module.css"

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
          hasEmailFormat: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    const form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        changed={(event) => this.inputHandler(event, formElement.id)}
        invalid={!formElement.config.valid}
        hasValidation={formElement.config.validation}
        touched={formElement.config.touched}
      />
    ));
    return (
      <div className={classes.Auth}>
        <form>
          {form}
          <Button buttonType="Success">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Auth;
