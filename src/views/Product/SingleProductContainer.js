import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { getProduct } from "../../redux/actions/productAction";
import { postCart } from "../../redux/actions/cartAction";
import { getVariantsByProductId } from "../../redux/actions/variantsAction";

const SingleProductContainer = () => {
  const location = useLocation(); // Use the hook to get location
  const product = useSelector((state) => state.product.product);
  const variants = useSelector((state) => state.variant.variants);
  const dispatch = useDispatch();

  const handleGetProduct = (id) => dispatch(getProduct(id));
  const handleGetVariants = (id) => dispatch(getVariantsByProductId(id));
  const handlePostCart = (id) => dispatch(postCart(id));

  return (
      <SingleProduct
          product={product}
          variants={variants}
          location={location}
          getProduct={handleGetProduct}
          getVariantsByProductId={handleGetVariants}
          postCart={handlePostCart}
      />
  );
};

export default SingleProductContainer;
