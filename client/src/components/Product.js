import React from "react";

import { Link } from "react-router-dom";

import "./style.min.css";

import Rating from "./Rating";

const Product = ({ key, product }) => {
  return (
    <div className="card" key={key}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="product" />
      </Link>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <Rating rating={product.rating} />
      <div className="price">£{product.price}</div>
    </div>
  );
};

export default Product;
