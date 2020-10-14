import * as actionTypes from "../actions/actionTypes";
import { UpdateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_PURCHASING_BURGER:
      return UpdateObject(state, { loading: true });
    case actionTypes.BURGER_ORDER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.id,
      };
      return UpdateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true,
      });
    case actionTypes.BURGER_ORDER_FAILED:
      return UpdateObject(state, { loading: false });
    case actionTypes.PURCHASE_INIT:
      return UpdateObject(state, { purchased: false });
    case actionTypes.FETCH_ORDERS_START:
      return UpdateObject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return UpdateObject(state, { orders: action.orders, loading: false });
    case actionTypes.FETCH_ORDERS_FAILED:
      return UpdateObject(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
