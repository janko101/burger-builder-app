import React, { Component } from "react";
import Button from "./Button";
import classes from "./ContactData.module.css";
import axios from "../axios-orders";
import Spinner from "./Spinner";
import Input from "./Input";

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
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      postCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Postal Code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "pick-up", displayValue: "Pick-up" },
            { value: "delivery", displayValue: "Delivery" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Mad Farmer",
        address: {
          street: "SomeStreet 101",
          zipCode: "101101",
          country: "Sweden",
        },
        email: "email@email.com",
      },
      deliveryMethod: "Pick-up",
    };
    axios
      .post("orders.json", order)
      .then((response) => {
        this.props.history.push("/");
        this.setState({
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    let form = (
      <form>
        <Input elementType="..." elementConfig="..." value="" />
        <Input elementType="..." elementConfig="..." value="" />
        <Input elementType="..." elementConfig="..." value="" />
        <Input elementType="..." elementConfig="..." value="" />
        <Button buttonType="Success" clicked={this.orderHandler}>
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

export default ContactData;
