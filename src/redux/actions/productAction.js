import API from "../../axios/API";

// Define Action Types
export const GET_ALL_PRODUCTS_BEGIN = "GET_ALL_PRODUCTS_BEGIN";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL";

export const GET_PRODUCT_BEGIN = "GET_PRODUCT_BEGIN";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const GET_PRODUCTS_BY_CATEGORY_BEGIN = "GET_PRODUCTS_BY_CATEGORY_BEGIN";
export const GET_PRODUCTS_BY_CATEGORY_SUCCESS = "GET_PRODUCTS_BY_CATEGORY_SUCCESS";
export const GET_PRODUCTS_BY_CATEGORY_FAIL = "GET_PRODUCTS_BY_CATEGORY_FAIL";

export const APPLY_FILTERS_BEGIN = "APPLY_FILTERS_BEGIN";
export const APPLY_FILTERS_SUCCESS = "APPLY_FILTERS_SUCCESS";
export const APPLY_FILTERS_FAIL = "APPLY_FILTERS_FAIL";

export const SEARCH_BEGIN = "SEARCH_BEGIN";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

// Actions
export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS_BEGIN });
  try {
    const response = await API.get("/products");
    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: error.response?.data || "Failed to fetch products",
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_BEGIN });
  try {
    const response = await API.get(`/products/${id}`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.response?.data || "Failed to fetch product",
    });
  }
};

export const getProductsByCategory = (category) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_BY_CATEGORY_BEGIN });
  try {
    const response = await API.get(`/products?category=${category}`);
    dispatch({ type: GET_PRODUCTS_BY_CATEGORY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_FAIL,
      payload: error.response?.data || "Failed to fetch category products",
    });
  }
};

export const applyFilters = (filters) => async (dispatch) => {
  dispatch({ type: APPLY_FILTERS_BEGIN });
  try {
    const response = await API.get(`/products?${filters}`);
    dispatch({ type: APPLY_FILTERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: APPLY_FILTERS_FAIL,
      payload: error.response?.data || "Failed to apply filters",
    });
  }
};
