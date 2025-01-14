/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, {useEffect, useState} from "react";
import LoginRegister from "../../components/LoginRegisterModal";
import Auth from "../../modules/Auth";

const SingleProduct = ({
                         product,
                         variants,
                         getProduct,
                         getVariantsByProductId,
                         postCart,
                         location,
                       }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productId = location.pathname.split("/").slice(-1)[0];
    getProduct(productId);
    getVariantsByProductId(productId);
  }, [getProduct, getVariantsByProductId, location.pathname]);

  const addToBag = () => {
    if (Auth.getUserDetails() && Auth.getToken()) {
      postCart(product.id).then((res) => console.log(res));
    } else {
      setModalShow(true);
    }
  };

  return (
      <div className="container single_product_container">
        {product && (
            <div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="product_details">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="product_price">₹{product.price}</div>
                    <button onClick={addToBag}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
        )}
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

export default SingleProduct;
