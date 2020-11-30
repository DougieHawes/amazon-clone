import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.min.css";

import Product from "./Product";

import MessageBox from "./MessageBox";
import LoadingBox from "./LoadingBox";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <div className="home-screen">
          {" "}
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
