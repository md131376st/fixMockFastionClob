import { combineReducers } from "redux";
import login from "./LoginReducer";
import register from "./RegisterReducer";
import department from "./DepartmentReducer";
import product from "./productReducer";
import variant from "./variantsReducer";
import cart from "./cartReducer";

export default combineReducers({
  department,
  login,
  register,
  product,
  variant,
  cart,
});
