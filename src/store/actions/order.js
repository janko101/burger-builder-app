import * as actionTypes from './actionTypes'

export const burgerOrderSuccess = (id, orderData) => {
  return {
    type: actionTypes.BURGER_ORDER_SUCCESS,
    id: id,
    orderData: orderData
  }
}

export const burgerOrderFailed = (error) => {
  return {
    type: actionTypes.BURGER_ORDER_FAILED,
    error: error
  }
}