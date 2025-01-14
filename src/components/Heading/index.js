/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import PropTypes from "prop-types";

function Heading({ title, className, style }) {
    return (
        <div className={`col text-center ${className}`} style={style}>
            <div className="section_title new_arrivals_title">
                <h2>{title}</h2>
            </div>
        </div>
    );
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

Heading.defaultProps = {
    title: "Default Title",
    className: "",
    style: {},
};

export default Heading;
