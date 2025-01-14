import API from "../../axios/API";
import Auth from "../../modules/Auth";

export const getCartByUserId = () => async (dispatch) => {
  const userId = Auth.getUserId();
  dispatch({ type: GET_CART_BY_USERID_BEGIN });
  try {
    const response = await API.get(`users/${userId}/cart`);
    dispatch({ type: GET_CART_BY_USERID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CART_BY_USERID_FAIL, payload: error });
  }
};

export const postCart = (productId, increase, decrease) => async (dispatch) => {
  const userId = Auth.getUserId();
  dispatch({ type: POST_CART_BEGIN });
  try {
    const response = await API.post(`users/${userId}/cart`, {
      userId,
      productId,
      increase,
      decrease,
    });
    dispatch({ type: POST_CART_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: POST_CART_FAIL, payload: error });
  }
};

export const POST_CART_BEGIN = "POST_CART_BEGIN";
export const POST_CART_SUCCESS = "POST_CART_SUCCESS";
export const POST_CART_FAIL = "POST_CART_FAIL";

export const GET_CART_BY_USERID_BEGIN = "GET_CART_BY_USERID_BEGIN";
export const GET_CART_BY_USERID_SUCCESS = "GET_CART_BY_USERID_SUCCESS";
export const GET_CART_BY_USERID_FAIL = "GET_CART_BY_USERID_FAIL";
