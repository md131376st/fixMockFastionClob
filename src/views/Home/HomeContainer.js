/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import { getAllProducts, applyFilters } from "../../redux/actions/productAction";
import { postCart } from "../../redux/actions/cartAction";

const HomeContainer = () => {
  const products = useSelector((state) => state.product.products);
  const departments = useSelector((state) => state.department.departments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
      <Home
          products={products}
          departments={departments}
          getAllProducts={() => dispatch(getAllProducts())}
          postCart={(productId) => dispatch(postCart(productId))}
      />
  );
};

export default HomeContainer;
