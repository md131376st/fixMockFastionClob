import { register } from "../../ServerRequest";

export const userRegister = (fullname, email, password, verifyPassword) => async (dispatch) => {
  dispatch({ type: POST_REGISTER_BEGIN });
  try {
    const response = await register(fullname, email, password, verifyPassword);
    dispatch({ type: POST_REGISTER_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: POST_REGISTER_FAIL, payload: error });
    throw error;
  }
};

export const POST_REGISTER_BEGIN = "POST_REGISTER_BEGIN";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAIL = "POST_REGISTER_FAIL";
