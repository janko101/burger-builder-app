import React, { Component } from "react";
import classes from "./Ingredient.module.css";
import PropTypes from "prop-types";

class Ingredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = (
          <div className={classes.BreadBottom} id="bread-bottom"></div>
        );
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop} id="bread-top">
            <div className={classes.Seeds1} id="seeds1"></div>
            <div className={classes.Seeds2} id="seeds2">
              {" "}
            </div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat} id="meat"></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese} id="cheese"></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad} id="salad"></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon} id="bacon"></div>;
        break;
      default:
        ingredient = null;
        break;
    }

    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Ingredient;
