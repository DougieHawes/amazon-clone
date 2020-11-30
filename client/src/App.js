import React from "react";

import "./style.min.css";

import data from "./data.js";

const App = () => {
  return (
    <div className="app">
      <header>
        <div>
          <a class="logo" href="index.html">
            amazon-clone
          </a>
        </div>
        <div>
          <a class="link" href="cart.html">
            Cart
          </a>
          <a class="link" href="signin.html">
            Sign-in
          </a>
        </div>
      </header>
      <main>
        {data.products.map((item) => (
          <div class="card">
            <img src={item.image} alt="product" />
            <div class="card-body">
              <h3>{item.name}</h3>
            </div>
            <div class="rating"></div>
            <div class="price">{item.price}</div>
          </div>
        ))}
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
};

export default App;
