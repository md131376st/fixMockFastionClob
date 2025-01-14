/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/LoginAction";
import Validator from "../../utils/Validator";
import { DEFAULT_RULE, EMAIL_RULE } from "../../utils/Validator/rule";
import LoadingButton from "../LoadingButton";

const LoginForm = ({ forgotPasswordClicked, registerClicked }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.login.error);

  const handleSubmit = () => {
    if (!Validator(email, EMAIL_RULE)) {
      setError("Invalid email format");
      return;
    }
    if (!Validator(password, DEFAULT_RULE)) {
      setError("Password does not meet the required criteria");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors
    dispatch(userLogin(email, password))
        .then(() => {
          setLoading(false);
          window.location.reload(); // Refresh after login
        })
        .catch((err) => {
          setLoading(false);
          setError(err?.response?.data?.message || "Login failed");
        });
  };

  return (
      <div className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
          />
          <i className="fa fa-user"></i>
        </div>
        <div className="form-group log-status">
          <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
          />
          <i className="fa fa-lock"></i>
        </div>
        {error && <span className="alert">{error}</span>}
        <a className="link" href="#" onClick={forgotPasswordClicked}>
          Lost your password?
        </a>
        <LoadingButton
            type="button"
            className="log-btn"
            loading={loading}
            onClick={handleSubmit}
        >
          Log in
        </LoadingButton>
        <div
            onClick={registerClicked}
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#c4c4c4",
              cursor: "pointer",
            }}
        >
          New user? Please Register
        </div>
      </div>
  );
};

LoginForm.propTypes = {
  forgotPasswordClicked: PropTypes.func,
  registerClicked: PropTypes.func,
};

export default LoginForm;
