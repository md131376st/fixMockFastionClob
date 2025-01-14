/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import Banner1 from "../../assets/images/banner_1.jpg";
import Banner2 from "../../assets/images/banner_2.jpg";
import Banner3 from "../../assets/images/banner_3.jpg";

const CategoryBanner = () => {
  const banners = [
    {image: Banner1, category: "Women's", animation: "fade-right"},
    {image: Banner2, category: "Accessories", animation: "fade-up"},
    {image: Banner3, category: "Men's", animation: "fade-left"},
  ];

  return (
      <div className="banner">
        <div className="container">
          <div className="row">
            {banners.map((banner, index) => (
                <div className="col-md-4" key={index}>
                  <div
                      className="banner_item align-items-center"
                      style={{backgroundImage: `url(${banner.image})`}}
                      data-aos={banner.animation}
                  >
                    <div className="banner_category">
                      <a href="categories.html">{banner.category}</a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default CategoryBanner;
