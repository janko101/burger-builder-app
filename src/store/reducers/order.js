import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_PURCHASING_BURGER:
      return {
        ...state,
        loading: true
      }
    case actionTypes.BURGER_ORDER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.id,
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
      };
    case actionTypes.BURGER_ORDER_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
