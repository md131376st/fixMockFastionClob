/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

// Route Views
import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import CartContainer from "../views/Cart/CartContainer";

// Private Routes Configuration
const PrivateRoutes = [
  {
    path: "/fashion-cube/cart",
    element: (
        <BaseLayout>
          <CartContainer />
        </BaseLayout>
    ),
  },
];

export default PrivateRoutes;
