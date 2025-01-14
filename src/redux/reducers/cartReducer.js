import {
  GET_CART_BY_USERID_BEGIN,
  GET_CART_BY_USERID_FAIL,
  GET_CART_BY_USERID_SUCCESS,
  POST_CART_BEGIN,
  POST_CART_FAIL,
  POST_CART_SUCCESS,
} from "../actions/cartAction";

const initialState = {
  cart: {},
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CART_BEGIN:
    case GET_CART_BY_USERID_BEGIN:
      return { ...state, loading: true, error: null };
    case POST_CART_SUCCESS:
    case GET_CART_BY_USERID_SUCCESS:
      return { ...state, cart: action.payload.data.cart, loading: false };
    case POST_CART_FAIL:
    case GET_CART_BY_USERID_FAIL:
      return { ...state, loading: false, error: action.payload?.error?.response?.data || "Unknown Error" };
    default:
      return state;
  }
};
