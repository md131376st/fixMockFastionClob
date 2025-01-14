/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import PropTypes from "prop-types";

const HorizontalFilter = ({ filters, activeFilter, onFilterSelect }) => {
  return (
      <div className="row align-items-center" data-aos="fade-up">
        <div className="col text-center">
          <div className="new_arrivals_sorting">
            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
              {filters.map((filter) => (
                  <li
                      key={filter.value}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                          activeFilter === filter.value ? "active is-checked" : ""
                      }`}
                      onClick={() => onFilterSelect(filter.value)}
                  >
                    {filter.label}
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

HorizontalFilter.propTypes = {
  filters: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
  ).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
};

HorizontalFilter.defaultProps = {
  filters: [
    { value: "*", label: "All" },
    { value: "women", label: "Women's" },
    { value: "accessories", label: "Accessories" },
    { value: "men", label: "Men's" },
  ],
};

export default HorizontalFilter;
