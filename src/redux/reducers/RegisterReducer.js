import {
  POST_REGISTER_BEGIN,
  POST_REGISTER_FAIL,
  POST_REGISTER_SUCCESS,
} from "../actions/RegisterAction";

const initialState = {
  register_loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER_BEGIN:
      return { ...state, register_loading: true };
    case POST_REGISTER_SUCCESS:
      return { ...state, register_loading: false };
    case POST_REGISTER_FAIL:
      return { ...state, register_loading: false, error: action.payload?.error?.response?.data || "Registration failed" };
    default:
      return state;
  }
};
