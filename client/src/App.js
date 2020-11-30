import React from "react";

import { Route, Link } from "react-router-dom";

import "./style.min.css";

import HomeScreen from "./components/HomeScreen.js";
import ProductScreen from "./components/ProductScreen.js";

const App = () => {
  return (
    <div className="app">
      <header>
        <div className="logo">
          <Link to="/">amazon-clone</Link>
        </div>
        <div>
          <a className="link" href="cart.html">
            Cart
          </a>
          <a className="link" href="signin.html">
            Sign-in
          </a>
        </div>
      </header>
      <main>
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/" component={HomeScreen} />
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
};

export default App;
