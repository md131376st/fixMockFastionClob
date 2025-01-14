/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SingleProduct from "./SingleProduct";
import {getProduct,} from "../../redux/actions/productAction";
import {postCart} from "../../redux/actions/cartAction";
import { getVariantsByProductId } from "../../redux/actions/variantsAction";

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
