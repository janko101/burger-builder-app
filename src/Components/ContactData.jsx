import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./Button";
import classes from "./ContactData.module.css";
import Spinner from "./Spinner";
import Input from "./Input";
import withErrorHandler from "./withErrorHandler";
import axios from "../axios-orders";
import * as actionCreators from "../store/actions/index";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
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
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      postCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Postal Code",
        },
        value: "",
        validation: {
          required: true,
          length: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "pick-up", displayValue: "Pick-up" },
            { value: "delivery", displayValue: "Delivery" },
          ],
        },
        value: "delivery",
        valid: true,
      },
    },
    isFormValid: false,
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formKeyIdentifier in this.state.orderForm) {
      formData[formKeyIdentifier] = this.state.orderForm[
        formKeyIdentifier
      ].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
    };
    this.props.onOrderBurger(order)
  };

  checkValidity(value, rules) {
    let isValid = false;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    if (rules.length) {
      isValid = value.length === rules.length;
    }
    if (rules.hasEmailFormat) {
      isValid = value.includes("@" && ".");
    }
    return isValid;
  }

  inputHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let isFormValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      isFormValid = updatedOrderForm[inputIdentifier].valid && isFormValid;
    }

    this.setState({ orderForm: updatedOrderForm, isFormValid: isFormValid });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
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
        ))}
        <Button buttonType="Success" disabled={!this.state.isFormValid}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Details:</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) =>
      dispatch(actionCreators.startOrder(orderData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
