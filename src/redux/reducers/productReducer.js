import {
  APPLY_FILTERS_BEGIN,
  APPLY_FILTERS_FAIL,
  APPLY_FILTERS_SUCCESS,
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_BY_CATEGORY_BEGIN,
  GET_PRODUCTS_BY_CATEGORY_FAIL,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  SEARCH_BEGIN,
  SEARCH_FAIL,
  SEARCH_SUCCESS,
} from "../actions/productAction";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_BEGIN:
    case GET_PRODUCT_BEGIN:
    case GET_PRODUCTS_BY_CATEGORY_BEGIN:
    case SEARCH_BEGIN:
    case APPLY_FILTERS_BEGIN:
      return { ...state, loading: true, error: null };
    case GET_ALL_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
    case SEARCH_SUCCESS:
    case APPLY_FILTERS_SUCCESS:
      return { ...state, products: action.payload.data.products, loading: false };
    case GET_PRODUCT_SUCCESS:
      return { ...state, product: action.payload.data.product, loading: false };
    case GET_ALL_PRODUCTS_FAIL:
    case GET_PRODUCT_FAIL:
    case GET_PRODUCTS_BY_CATEGORY_FAIL:
    case SEARCH_FAIL:
    case APPLY_FILTERS_FAIL:
      return { ...state, loading: false, error: action.payload?.error?.response?.data };
    default:
      return state;
  }
};
