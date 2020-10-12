import * as actionTypes from "./actionTypes";
import axios from "../axios-orders";

export const burgerOrderSuccess = (id, orderData) => {
  return {
    type: actionTypes.BURGER_ORDER_SUCCESS,
    id: id,
    orderData: orderData,
  };
};

export const burgerOrderFailed = (error) => {
  return {
    type: actionTypes.BURGER_ORDER_FAILED,
    error: error,
  };
};

export const startOrder = (orderData) => {
  return (dispatch) => {
    axios
      .post("orders.json", orderData)
      .then((response) => {
        dispatch(burgerOrderSuccess(response.data, orderData));
      })
      .catch((error) => {
        dispatch(burgerOrderFailed(error));
      });
  };
};
