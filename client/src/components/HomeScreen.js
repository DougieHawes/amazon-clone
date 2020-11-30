import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import "./style.min.css";

import Product from "./Product";

import MessageBox from "./MessageBox";
import LoadingBox from "./LoadingBox";

import { listProducts } from "../actions/productActions.js";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <div className="home-screen">
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
