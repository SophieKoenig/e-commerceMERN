import "./App.css";
import Shop from "../shop/shop";
import LandingPage from "./landingPage.js";
import React, { useState, useEffect } from "react";
//import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "../orders/orders";
import Navbar from "../navigation/navbar";
import Basket from "../shop/basket";
import CheckoutPage from "../checkout/checkout";
import Staff from "../orders/staff";

const App = () => {
  const [products, setShirts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

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
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
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

  //
  const onOrder = (event) => {
    const postURL = "http://localhost:7967/orders";
    fetch(postURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "sophie999",
        orders: cartItems,
      }),
    }).then(() => {
      alert("Your item has been added to the cart!");
    });
  };

  const fetchOrders = async () => {
    return fetch("http://localhost:7967/orders")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    async function init() {
      const fetchedData = await fetchOrders();
      setOrders(fetchedData);
    }

    init();
  }, []);

  const updateOrders = async (event) => {
    fetch(`http://localhost:7967/orders/${event.target.value}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: "shipped",
      }),
    }).then(() => {
      alert("The order has been updated");
    });
  };

  const deleteOrder = async (event) => {
    fetch(`http://localhost:7967/orders/${event.target.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      alert("The order has been deleted");
    });
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
                  <Basket
                    onAdd={onAdd}
                    onRemove={onRemove}
                    cartItems={cartItems}
                  />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <>
                <div className="row">
                  <Orders fetchOrders={fetchOrders} orders={orders} />
                  <Staff
                    updateOrders={updateOrders}
                    deleteOrder={deleteOrder}
                    orders={orders}
                  />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
                <CheckoutPage
                  state={{ cartItems: "cartItems" }}
                  cartItems={cartItems}
                  onOrder={onOrder}
                />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
