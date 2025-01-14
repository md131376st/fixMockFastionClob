/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, {useEffect, useState} from "react";
import SingleProduct from "../../components/Products/SingleProduct";
import Auth from "../../modules/Auth";
import LoginRegister from "../../components/LoginRegisterModal";
import Filter from "./components/Filter";

const Category = ({products, getAllProducts, applyFilters, postCart, location}) => {
  const [modalShow, setModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (!products) {
      getAllProducts();
    }
  }, [products, getAllProducts]);

  const addToBag = (params) => {
    if (Auth.getUserDetails() && Auth.getToken()) {
      postCart(params).then((res) => console.log(res));
    } else {
      setModalShow(true);
    }
  };

  return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">
                  <a href="/">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    {location.pathname.split("/")[2]}
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                    {location.pathname.split("/")[3]}
                  </a>
                </li>
              </ul>
            </div>

            <div className="sidebar">
              <Filter applyFilters={applyFilters} />
            </div>
            <div className="main_content">
              <div className="products_iso">
                <div className="row">
                  <div className="col">
                    {/* Product Sorting */}
                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">Default Sorting</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_type">
                            <li className="type_sorting_btn">
                              <span>Default Sorting</span>
                            </li>
                            <li className="type_sorting_btn">
                              <span>Price</span>
                            </li>
                            <li className="type_sorting_btn">
                              <span>Product Name</span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span>Show</span>
                          <span className="num_sorting_text">6</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_num">
                            <li className="num_sorting_btn">
                              <span>6</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>12</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>24</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Products */}
                <div className="row">
                  {products &&
                      products.slice(0, 8).map((item, index) => (
                          <div
                              className="col-lg-3 col-sm-6"
                              key={index}
                              data-aos="zoom-in"
                          >
                            <SingleProduct productItem={item} addToBag={addToBag}/>
                          </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoginRegister
            show={modalShow}
            login={isLogin}
            registerClicked={() => {
              setModalShow(true);
              setIsLogin(false);
            }}
            loginClicked={() => {
              setModalShow(true);
              setIsLogin(true);
            }}
            onHide={() => setModalShow(false)}
        />
      </div>
  );
};

export default Category;
