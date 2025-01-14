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
    if (!products || products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products]);

  return (
      <Category
          products={products}
          getAllProducts={() => dispatch(getAllProducts())}
          applyFilters={(filterString) => dispatch(applyFilters(filterString))}
          postCart={(productId) => dispatch(postCart(productId))}
      />
  );
};

export default CategoryContainer;
