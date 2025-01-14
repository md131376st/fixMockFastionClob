/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style.css";

const LoginRegister = ({ login, onHide, registerClicked, loginClicked, ...props }) => {
  return (
      <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          id="loginModal"
          className="modal fade login"
      >
        <Modal.Body>
          <div className="modal--close--button" onClick={onHide}>
            <i className="fas fa-times"></i>
          </div>
          {login ? (
              <LoginForm registerClicked={registerClicked} />
          ) : (
              <RegisterForm loginClicked={loginClicked} />
          )}
        </Modal.Body>
      </Modal>
  );
};

LoginRegister.propTypes = {
  login: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  registerClicked: PropTypes.func.isRequired,
  loginClicked: PropTypes.func.isRequired,
};

LoginRegister.defaultProps = {
  login: true,
};

export default LoginRegister;
