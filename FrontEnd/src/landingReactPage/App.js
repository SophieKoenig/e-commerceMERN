//import logo from "./logo.svg";
//import "./favicon.ico";
import "./App.css";
import Shop from "../shop/shop";
import LandingPage from "./landingPage.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Orders from "../orders/orders";
import Card from "../card/card";
import Navbar from "../navigation/navbar";

const App = () => {
  const [shirts, setShirts] = useState([]);
  //const [imgSrc, setImgSrc] = useState("");

  // const [audioSrc, setAudioSrc] = useState("");
  // const [count, setCount] = useState(0);

  const fetchShirts = async () => {
    return fetch("http://localhost:7967/shirts")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    async function init() {
      const fetchedData = await fetchShirts();
      setShirts(fetchedData);
      // setImgSrc(fetchedData[0].url);
      // setAudioSrc(fetchedData[0].liveaudio.url);
      console.log(fetchedData);
    }

    init();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/card" element={<Card />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
