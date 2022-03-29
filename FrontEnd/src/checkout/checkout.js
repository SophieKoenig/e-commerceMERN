import React from "react";
import { useLocation } from "react-router-dom";

const CheckoutPage = (props) => {
  //   const { cartItems, onOrder } = props;
  const location = useLocation();
  const { cartItems } = location.state;

  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item._id}>
          <p>
            {item.qty} x {item.style} {}
            {item.price}kr
          </p>
          <p>----------------------------</p>
        </div>
      ))}
      <a href="./orders">
        <button>Place the Order</button>
      </a>
    </div>
  );
};

export default CheckoutPage;
