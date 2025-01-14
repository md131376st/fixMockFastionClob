import React, {useState} from "react";
import SingleProduct from "./SingleProduct";
import Heading from "../Heading";
import PropTypes from "prop-types";

const NewArrivals = ({products, addToBag, departments}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedOption, setSelectedOption] = useState("All");

  const optionClicked = (option) => {
    if (option === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.department === option));
    }
    setSelectedOption(option);
  };

  return (
      <div className="new_arrivals" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <Heading title="New Arrivals"/>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <ul className="arrivals_grid_sorting button-group filters-button-group">
                {["All", "Women", "Men"].map((option) => (
                    <li
                        key={option}
                        onClick={() => optionClicked(option)}
                        className={`grid_sorting_button ${
                            selectedOption === option ? "active is-checked" : ""
                        }`}
                    >
                      {option.toLowerCase()}
                    </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            {filteredProducts.slice(0, 8).map((item, index) => (
                <div
                    className="col-lg-3 col-sm-6"
                    key={index}
                    data-aos="zoom-in"
                >
                  <SingleProduct productItem={item} addToBag={addToBag}/>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

NewArrivals.propTypes = {
  addToBag: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  departments: PropTypes.array,
};

export default NewArrivals;
