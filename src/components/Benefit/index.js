/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";

const Benefit = () => {
  const benefits = [
    { icon: "fa-truck", title: "Free Shipping", description: "Suffered Alteration in Some Form" },
    { icon: "far fa-money-bill-alt", title: "Cash on Delivery", description: "The Internet Tend To Repeat" },
    { icon: "fa-undo", title: "45 Days Return", description: "Making it Look Like Readable" },
    { icon: "far fa-clock", title: "Opening All Week", description: "8AM - 09PM" },
  ];

  return (
      <div className="benefit" data-aos="fade-up">
        <div className="container">
          <div className="row benefit_row">
            {benefits.map((benefit, index) => (
                <div className="col-lg-3 benefit_col" key={index}>
                  <div className="benefit_item d-flex flex-row align-items-center">
                    <div className="benefit_icon">
                      <i className={`fa ${benefit.icon}`} aria-hidden="true"></i>
                    </div>
                    <div className="benefit_content">
                      <h6>{benefit.title}</h6>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Benefit;
