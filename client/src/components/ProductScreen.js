import React from "react";

import { Link } from "react-router-dom";

import "./style.min.css";

import data from "../data.js";

import Rating from "./Rating.js";

const ProductScreen = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);

  if (!product) {
    return <div>product not found</div>;
  }

  return (
    <div className="product-screen">
      <div className="column">
        <Link to="/">return to home screen</Link>
        <br />
        <img src={product.image} alt={product.name} />
      </div>
      <div className="column">
        <h3 className="product-screen-title">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="product-screen-price">£ {product.price}</div>
        <div className="product-screen-description">{product.description}</div>
      </div>
      <div className="column">
        <div className="purchase-details-box">
          <div className="product-screen-price">£ {product.price}</div>
          {product.qtyStock === 0 ? <>SOLD-OUT</> : <>IN-STOCK</>}
          <button className="purchase-details-box-button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
