import { login } from "../../ServerRequest";

export const userLogin = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_BEGIN });
  try {
    const response = await login(email, password);
    dispatch({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data || "Login failed",
    });
    throw error;
  }
};

export const insertToken = () => (dispatch) => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    dispatch({ type: INSERT_TOKEN_SUCCESS, payload: JSON.parse(auth) });
  } else {
    dispatch({ type: INSERT_TOKEN_FAIL });
  }
};

export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const INSERT_TOKEN_SUCCESS = "INSERT_TOKEN_SUCCESS";
export const INSERT_TOKEN_FAIL = "INSERT_TOKEN_FAIL";
