//rfce shortcut
//here the user should be able to see all his purchases
//adding, removing, changing items
//adding their details+bank stuff
import React from "react";
import { useState } from "react";

function Card() {
  const [style, setStyle] = useState();
  
  const styleChange = (event) => {
    setStyle(event.target.value);
  };

  const addToCart = () => {
    console.log("yes, it worked");
  };
  return (
    <div>
      <button
        type="button"
        name="addHoodie"
        value="Hoodie"
        onClick={function (event) {
          addToCart();
          styleChange();
        }}
      >
        Add Hoodie to Cart
      </button>
      <button type="button" name="addShirt" value="Shirt" onClick={addToCart}>
        Add Shirt to Cart
      </button>
      <button
        type="button"
        className="addSweat"
        value="sweat"
        onClick={addToCart}
      >
        Add Sweatshirt to Cart
      </button>
    </div>
  );
}

export default Card;
