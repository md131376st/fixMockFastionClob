import API from "../../axios/API";

export const getDepartments = () => async (dispatch) => {
  dispatch({ type: GET_DEPARTMENTS_BEGIN });
  try {
    const response = await API.get("/departments");
    dispatch({ type: GET_DEPARTMENTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_DEPARTMENTS_FAIL, payload: error });
  }
};

export const GET_DEPARTMENTS_BEGIN = "GET_DEPARTMENTS_BEGIN";
export const GET_DEPARTMENTS_SUCCESS = "GET_DEPARTMENTS_SUCCESS";
export const GET_DEPARTMENTS_FAIL = "GET_DEPARTMENTS_FAIL";
