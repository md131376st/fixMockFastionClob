/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/actions/RegisterAction";
import Validator from "../../utils/Validator";
import { DEFAULT_RULE, EMAIL_RULE } from "../../utils/Validator/rule";
import LoadingButton from "../LoadingButton";

const RegisterForm = ({ loginClicked }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const registerError = useSelector((state) => state.register.error);

  const handleSubmit = () => {
    if (!Validator(name, DEFAULT_RULE)) {
      setError("Invalid Name");
      return;
    }
    if (!Validator(email, EMAIL_RULE)) {
      setError("Invalid Email Format");
      return;
    }
    if (!Validator(password, DEFAULT_RULE)) {
      setError("Invalid Password");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors
    dispatch(userRegister(name, email, password, password))
        .then(() => {
          setLoading(false);
          loginClicked(); // Switch to login form after successful registration
        })
        .catch((err) => {
          setLoading(false);
          setError(err?.response?.data?.message || "Registration failed");
        });
  };

  return (
      <div className="login-form">
        <h2>Register</h2>
        <div className="form-group">
          <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
          />
          <i className="fa fa-user"></i>
        </div>
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
          <i className="fa fa-envelope"></i>
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
        <LoadingButton
            type="button"
            className="log-btn"
            loading={loading}
            onClick={handleSubmit}
        >
          Register
        </LoadingButton>
        <div
            onClick={loginClicked}
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "#c4c4c4",
              cursor: "pointer",
            }}
        >
          Already have an account? Please login.
        </div>
      </div>
  );
};

RegisterForm.propTypes = {
  loginClicked: PropTypes.func.isRequired,
};

export default RegisterForm;
