import {
  GET_VARIANTS_QUERY_BEGIN,
  GET_VARIANTS_QUERY_FAIL,
  GET_VARIANTS_QUERY_SUCCESS,
} from "../actions/variantsAction";

const initialState = {
  variants: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VARIANTS_QUERY_BEGIN:
      return { ...state, loading: true, error: null };
    case GET_VARIANTS_QUERY_SUCCESS:
      return { ...state, variants: action.payload.data.variants, loading: false };
    case GET_VARIANTS_QUERY_FAIL:
      return { ...state, loading: false, error: action.payload?.error?.response?.data || "Variants fetch failed" };
    default:
      return state;
  }
};
