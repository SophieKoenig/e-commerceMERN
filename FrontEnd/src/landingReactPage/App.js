import "./App.css";
import Shop from "../shop/shop";
import LandingPage from "./landingPage.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "../orders/orders";
import Card from "../card/card";
import Navbar from "../navigation/navbar";
import Basket from "../shop/basket";

const App = () => {
  const [products, setShirts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    return fetch("http://localhost:7967/products")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    async function init() {
      const fetchedData = await fetchProducts();
      setShirts(fetchedData);
    }

    init();
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      console.log("dush");
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      console.log("Hallo");
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            path="/shop"
            element={
              <>
                <div className="row">
                  <Shop onAdd={onAdd} products={products} />
                  <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
                </div>
              </>
            }
          ></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/card" element={<Card />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
