/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";

const HomeBanner = ({ slides }) => {
  return (
      <Carousel>
        {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div
                  className="d-block w-100 main_slider"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
              >
                <div className="container fill_height">
                  <div className="row align-items-center fill_height">
                    <div className="col">
                      <div className="main_slider_content" data-aos="fade-right">
                        <h6>{slide.subtitle}</h6>
                        <h1>{slide.title}</h1>
                        <div className="red_button shop_now_button">
                          <a href={slide.link || "#"}>shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
        ))}
      </Carousel>
  );
};

HomeBanner.propTypes = {
  slides: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        link: PropTypes.string,
      })
  ).isRequired,
};

HomeBanner.defaultProps = {
  slides: [
    {
      image: "/path/to/default1.jpg",
      title: "Get up to 30% Off New Arrivals",
      subtitle: "Spring / Summer Collection 2017",
      link: "#",
    },
    {
      image: "/path/to/default2.jpg",
      title: "Discover the Latest Trends",
      subtitle: "Autumn / Winter Collection 2017",
      link: "#",
    },
  ],
};

export default HomeBanner;
