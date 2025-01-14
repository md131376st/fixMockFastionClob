/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";

const Filter = ({ categories = [], applyFilter }) => {
  return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul className="sidebar_categories">
          {categories.map((category, index) => (
              <li key={index} onClick={() => applyFilter(category)}>
                <a href="#">{category}</a>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default Filter;
