import React from "react";
//import { useState, useEffect } from "react";

const Product = (props) => {
  const { product, onAdd } = props;

  return (
    <div>
      <img className="small" src={product.imgUrl} alt={product.style}></img>
      <h3>{product.style}</h3>
      <div>{product.price}kr</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
