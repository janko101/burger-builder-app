import * as actionTypes from "../actions/actionTypes";
import { UpdateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const startPurchasingBurger = (state, action) => {
  return UpdateObject(state, { loading: true });
};

const burgerOrderSuccess = (state, action) => {
  const newOrder = UpdateObject(action.orderData, { id: action.id });
  return UpdateObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true,
  });
};

const burgerOrderFailed = (state, action) => {
  return UpdateObject(state, { loading: false });
};

const purchaseInit = (state, action) => {
  return UpdateObject(state, { purchased: false });
};

const fetchOrdersStart = (state, action) => {
  return UpdateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return UpdateObject(state, { orders: action.orders, loading: false });
};

const fetchOrdersFailed = (state, action) => {
  return UpdateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_PURCHASING_BURGER:
      return startPurchasingBurger(state, action);
    case actionTypes.BURGER_ORDER_SUCCESS:
      return burgerOrderSuccess(state, action);
    case actionTypes.BURGER_ORDER_FAILED:
      return burgerOrderFailed(state, action);
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAILED:
      return fetchOrdersFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
