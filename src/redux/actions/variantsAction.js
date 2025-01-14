import API from "../../axios/API";

export const getVariantsByProductId = (productId) => async (dispatch) => {
  dispatch({ type: GET_VARIANTS_QUERY_BEGIN });
  try {
    const response = await API.get(`/variants?productId=${productId}`);
    dispatch({ type: GET_VARIANTS_QUERY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_VARIANTS_QUERY_FAIL,
      payload: error.response?.data || "Failed to fetch variants",
    });
  }
};

export const GET_VARIANTS_QUERY_BEGIN = "GET_VARIANTS_QUERY_BEGIN";
export const GET_VARIANTS_QUERY_SUCCESS = "GET_VARIANTS_QUERY_SUCCESS";
export const GET_VARIANTS_QUERY_FAIL = "GET_VARIANTS_QUERY_FAIL";
