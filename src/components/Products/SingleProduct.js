import React from "react";
import PropTypes from "prop-types";
import jumpTo from "../../modules/Navigation";

const SingleProduct = ({ productItem, addToBag }) => {
    const handleAddToBag = () => {
        if (typeof addToBag === "function") {
            addToBag(productItem._id);
        } else {
            console.error("addToBag is not a function");
        }
    };

    return (
        <div className="product-item men">
            <div
                className="product discount product_filter"
                onClick={() => jumpTo(`/fashion-cube/single-product/${productItem._id}`)}
            >
                <div className="product_image">
                    <img src={productItem.imagePath} alt={productItem.title} className="img-fluid" />
                </div>
                <div className="favorite favorite_left">
                    <i className="far fa-heart"></i>
                </div>
                <div className="product_info">
                    <h6 className="product_name">
                        <span>{productItem.title}</span>
                    </h6>
                    <div className="product_price">
                        ₹ {productItem.price}
                        <span> ₹ {(parseFloat(productItem.price) + 30).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div
                className="red_button add_to_cart_button"
                onClick={handleAddToBag}
            >
                <div style={{ color: "#ffffff" }}>add to cart</div>
            </div>
        </div>
    );
};

SingleProduct.propTypes = {
    productItem: PropTypes.object.isRequired,
    addToBag: PropTypes.func.isRequired,
};

export default SingleProduct;
