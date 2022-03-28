import React from "react";
import "./shop.css";
import Product from "./product";

const Shop = (props) => {
  const { products, onAdd } = props;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product._id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
};

export default Shop;
