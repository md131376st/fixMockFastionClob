import { connect } from "react-redux";
import NavBar from "./NavBar";
import { getDepartments } from "../../redux/actions/DepartmentAction";
import { getCartByUserId } from "../../redux/actions/cartAction";

const mapStateToProps = (state) => ({
  departments: state.department.departments,
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  getDepartments,
  getCartByUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
