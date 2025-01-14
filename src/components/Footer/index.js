/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";

const Footer = () => {
  const navLinks = ["Blog", "FAQs", "Contact us"];
  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-pinterest-p", href: "#" },
  ];

  return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                <ul className="footer_nav">
                  {navLinks.map((link, index) => (
                      <li key={index}>
                        <a href="#">{link}</a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                <ul>
                  {socialLinks.map((social, index) => (
                      <li key={index}>
                        <a href={social.href}>
                          <i className={social.icon}></i>
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer_nav_container">
                <div className="cr">
                  ©2018 All Rights Reserved. This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://quintuslabs.com/" target="_blank" rel="noreferrer">
                    Quintus Labs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
