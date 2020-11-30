import React from "react";

import data from "../data.js";

import Product from "./Product";

const HomeScreen = () => {
  return (
    <>
      {data.products.map((item) => (
        <Product key={item._id} product={item} />
      ))}
    </>
  );
};

export default HomeScreen;
