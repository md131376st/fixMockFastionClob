import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCartView from "../HomeCartView";
import MobileMenu from "../MobileMenu";
import MediaQuery from "react-responsive";
import device from "../../modules/mediaQuery";

const NavBar = ({ cart, departments, getCartByUserId }) => {
  const [modalShow, setModalShow] = useState(false);
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    if (Object.keys(cart).length < 1) {
      getCartByUserId();
    }
  }, [cart, getCartByUserId]);

  const toggleModal = () => setModalShow(!modalShow);
  const toggleMenu = () => setActiveClass(!activeClass);

  return (
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <Link to="/fashion-cube">
                  Fashion<span>Cube</span>
                </Link>
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <Link to="/home">home</Link>
                  </li>
                  <li className="mega-drop-down">
                    <a href="#">
                      shop <i className="fa fa-angle-down"></i>
                    </a>
                    <div className="mega-menu">
                      <div className="mega-menu-wrap">
                        {departments.map((item, index) => (
                            <div className="mega-menu-content" key={index}>
                              <h5>{item.departmentName}</h5>
                              <ul className="stander">
                                {item.categories.split(",").map((i, idx) => (
                                    <li key={idx}>
                                      <a
                                          href={`/fashion-cube/shops/${item.departmentName}/${i}`}
                                      >
                                        {i}
                                      </a>
                                    </li>
                                ))}
                              </ul>
                            </div>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="checkout">
                    <a href="#" onClick={toggleModal}>
                      <i className="fas fa-shopping-bag"></i>
                      {cart.totalQty && (
                          <span id="checkout_items" className="checkout_items">
                        {cart.totalQty}
                      </span>
                      )}
                    </a>
                  </li>
                </ul>
                <div className="hamburger_container" onClick={toggleMenu}>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <MediaQuery query={device.max.tabletL}>
          <MobileMenu activeClass={activeClass} onClose={toggleMenu} />
        </MediaQuery>
        {modalShow && (
            <HomeCartView cart={cart} show={modalShow} onHide={toggleModal} />
        )}
      </div>
  );
};

export default NavBar;
