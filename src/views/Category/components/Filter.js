/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";

const Filter = () => {
  return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul className="sidebar_categories">
          <li>
            <a href="#">Men</a>
          </li>
          <li className="active">
            <a href="#">
            <span>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </span>
              Women
            </a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
  );
};

export default Filter;
