import { LOGIN_BEGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/LoginAction";

const initialState = {
  signin_loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return { ...state, signin_loading: true };
    case LOGIN_SUCCESS:
      return { ...state, signin_loading: false, error: null };
    case LOGIN_FAIL:
      return { ...state, signin_loading: false, error: action.payload?.error?.response?.data || "Login failed" };
    default:
      return state;
  }
};
