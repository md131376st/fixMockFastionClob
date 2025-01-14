/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import "./style.css";
import Auth from "../../modules/Auth";
import EmptyCart from "../../assets/images/emptyCart.png";
import jumpTo from "../../modules/Navigation";

const HomeCartView = ({ cart, show, onHide }) => {
    const { items, totalPrice } = cart;

    const goToCheckout = () => {
        jumpTo("/fashion-cube/cart");
    };

    const isLoggedIn = Auth.getUserDetails() && Auth.getToken();

    return (
        <Modal show={show} onHide={onHide} className="right">
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
                {items && (
                    <span className="checkout--btn" onClick={goToCheckout}>
            Checkout
          </span>
                )}
            </Modal.Header>
            <Modal.Body className="modal-body-content">
                {!isLoggedIn ? (
                    <div className="empty--basket">
                        <h4>Please login to view cart</h4>
                        <img src={EmptyCart} className="img-fluid" alt="Empty Cart" />
                    </div>
                ) : !items ? (
                    <div className="empty--basket">
                        <img src={EmptyCart} className="img-fluid" alt="Empty Cart" />
                        <h4 style={{ textAlign: "center" }}>Empty cart</h4>
                    </div>
                ) : (
                    <>
                        {Object.keys(items).map((id) => (
                            <div key={id} className="basket--item">
                                <div className="basket--item--img">
                                    <img src={items[id].item.imagePath} alt={items[id].item.title} />
                                </div>
                                <div className="basket--item--details">
                                    <div className="basket--item--title">{items[id].item.title}</div>
                                    <div className="basket--item--quantity">
                                        Quantity: <span>{items[id].qty}</span>
                                    </div>
                                    <div className="basket--item--price">
                                        Price: <span>₹{items[id].price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="total--price-container">
                            <h3 style={{ textAlign: "center" }}>
                                Total: <span style={{ color: "#FE4C50" }}>₹{totalPrice}</span>
                            </h3>
                            <button
                                className="btn btn-wide log-btn"
                                style={{ marginTop: 20 }}
                                onClick={goToCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
};

HomeCartView.propTypes = {
    cart: PropTypes.shape({
        items: PropTypes.object,
        totalPrice: PropTypes.number,
    }).isRequired,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
};

export default HomeCartView;
