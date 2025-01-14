/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const LoadingButton = ({
                           className,
                           loading,
                           onClick,
                           type,
                           style,
                           children
                       }) => {
    const handleClick = (e) => {
        if (!loading && onClick) {
            onClick(e);
        }
    };

    return (
        <button
            type={type}
            className={classNames(
                "btn btn-wide",
                className,
                { "btn-wait": loading },
                { disabled: loading }
            )}
            style={style}
            onClick={handleClick}
            aria-busy={loading}
            disabled={loading}
        >
            {loading ? "Please Wait..." : children}
        </button>
    );
};

LoadingButton.propTypes = {
    className: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
};

LoadingButton.defaultProps = {
    className: "btn-primary btn-7",
    loading: false,
    type: "button",
    style: {},
};

export default LoadingButton;
