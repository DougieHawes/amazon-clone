import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./style.min.css";

import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

import Rating from "./Rating.js";

import { detailsProduct } from "../actions/productActions";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
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
            <div className="product-screen-description">
              {product.description}
            </div>
          </div>
          <div className="column">
            <div className="purchase-details-box">
              <div className="product-screen-price">£ {product.price}</div>
              {product.qtyStock === 0 ? <>SOLD-OUT</> : <>IN-STOCK</>}
              <button className="purchase-details-box-button">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
