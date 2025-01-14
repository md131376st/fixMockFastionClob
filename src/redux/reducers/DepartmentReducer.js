import {
  GET_DEPARTMENTS_BEGIN,
  GET_DEPARTMENTS_FAIL,
  GET_DEPARTMENTS_SUCCESS,
} from "../actions/DepartmentAction";

const initialState = {
  loading: false,
  departments: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS_BEGIN:
      return { ...state, loading: true, error: null };
    case GET_DEPARTMENTS_SUCCESS:
      return { ...state, loading: false, departments: action.payload.data.departments };
    case GET_DEPARTMENTS_FAIL:
      return { ...state, loading: false, error: action.payload?.error?.response?.data };
    default:
      return state;
  }
};
