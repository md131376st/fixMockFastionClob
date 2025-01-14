/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useEffect, useState } from "react";
import SingleProduct from "../../components/Products/SingleProduct";
import Auth from "../../modules/Auth";
import LoginRegister from "../../components/LoginRegisterModal";
import Filter from "./components/Filter";

const Category = ({ products, getAllProducts, applyFilters, postCart, location }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!products) {
      getAllProducts();
    }
  }, [products, getAllProducts]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const addToBag = (params) => {
    if (Auth.getUserDetails() && Auth.getToken()) {
      postCart(params).then((res) => console.log(res));
    } else {
      setModalShow(true);
    }
  };

  const handleFilter = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
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
              </ul>
            </div>

            <div className="sidebar">
              <Filter
                  categories={[...new Set(products.map((p) => p.category))]}
                  applyFilter={handleFilter}
              />
            </div>
            <div className="main_content">
              <div className="products_iso">
                <div className="row">
                  {filteredProducts &&
                      filteredProducts.slice(0, 8).map((item, index) => (
                          <div
                              className="col-lg-3 col-sm-6"
                              key={index}
                              data-aos="zoom-in"
                          >
                            <SingleProduct productItem={item} addToBag={addToBag} />
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
