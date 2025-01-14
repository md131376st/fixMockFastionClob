/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import { getAllProducts, applyFilters } from "../../redux/actions/productAction";
import { postCart } from "../../redux/actions/cartAction";

const CategoryContainer = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleApplyFilters = (filterString) => {
    dispatch(applyFilters(filterString));
  };

  const handlePostCart = (productId) => {
    dispatch(postCart(productId));
  };

  return (
      <Category
          products={products}
          getAllProducts={() => dispatch(getAllProducts())}
          applyFilters={handleApplyFilters}
          postCart={handlePostCart}
      />
  );
};

export default CategoryContainer;
