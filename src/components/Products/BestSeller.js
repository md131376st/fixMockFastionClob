import React from "react";
import SingleProduct from "./SingleProduct";
import Heading from "../Heading";

const BestSeller = ({products, addToBag}) => (
    <div className="best_sellers">
      <div className="container">
        <div className="row">
          <Heading title="Best Sellers" data-aos="fade-up"/>
        </div>
        <div className="row" style={{marginTop: 50}}>
          {products.slice(5, 9).map((item, index) => (
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

export default BestSeller;
