import React from "react";
import PropTypes from "prop-types";
import SingleProduct from "./SingleProduct";
import Heading from "../Heading";

const NewArrivals = ({ products, addToBag }) => {
  return (
      <div className="new_arrivals" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <Heading title="New Arrivals" />
          </div>
          <div className="row">
            {products.slice(0, 8).map((product, index) => (
                <div className="col-lg-3 col-sm-6" key={index} data-aos="zoom-in">
                  <SingleProduct productItem={product} addToBag={addToBag} />
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

NewArrivals.propTypes = {
  products: PropTypes.array.isRequired,
  addToBag: PropTypes.func.isRequired,
};

export default NewArrivals;
