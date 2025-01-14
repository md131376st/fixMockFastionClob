/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useState, useEffect } from "react";
import TopNavBar from "../components/TopNavBar";
import NavBarContainer from "../components/NavBar/NavBarContainer";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const BaseLayout = ({ children }) => {
  const [topHeaderClass, setTopHeaderClass] = useState("show");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setTopHeaderClass("hide");
      } else {
        setTopHeaderClass("show");
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className="main-wrapper">
        <div className="super_container">
          <header className="header trans_300">
            <TopNavBar className={topHeaderClass} />
            <NavBarContainer />
          </header>
          <div className="layout-Container">{children}</div>
          <Footer />
        </div>
      </div>
  );
};

export default BaseLayout;
