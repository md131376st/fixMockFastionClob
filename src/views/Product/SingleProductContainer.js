/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleProduct from "./SingleProduct";
import {
  getProduct,
  getVariantsByProductId,
} from "../../redux/actions/productAction";
import { postCart } from "../../redux/actions/cartAction";

const SingleProductContainer = ({ location }) => {
  const product = useSelector((state) => state.product.product);
  const variants = useSelector((state) => state.variant.variants);
  const dispatch = useDispatch();

  return (
      <SingleProduct
          product={product}
          variants={variants}
          location={location}
          getProduct={(id) => dispatch(getProduct(id))}
          getVariantsByProductId={(id) => dispatch(getVariantsByProductId(id))}
          postCart={(id) => dispatch(postCart(id))}
      />
  );
};

export default SingleProductContainer;
