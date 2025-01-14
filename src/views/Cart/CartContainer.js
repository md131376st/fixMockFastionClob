/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { getCartByUserId, postCart } from "../../redux/actions/cartAction";

const CartContainer = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartByUserId());
  }, [dispatch]);

  const handlePostCart = (pid, increase, decrease) => {
    dispatch(postCart(pid, increase, decrease));
  };

  return <Cart cart={cart} postCart={handlePostCart} />;
};

export default CartContainer;
