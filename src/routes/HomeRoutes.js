/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import { Navigate } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";

const routes = [
  {
    path: "/fashion-cube",
    element: (
        <BaseLayout>
          <Home />
        </BaseLayout>
    ),
  },
  {
    path: "/home",
    element: <Navigate to="/fashion-cube" replace />,
  },
  {
    path: "/fashion-cube/single-product/:id",
    element: (
        <BaseLayout>
          <SingleProductContainer />
        </BaseLayout>
    ),
  },
  {
    path: "/fashion-cube/shops/:category",
    element: (
        <BaseLayout>
          <CategoryContainer />
        </BaseLayout>
    ),
  },
];

export default routes;
