import React from "react";
import { Link } from "react-router-dom";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item._id} className="row">
          <div className="col-2">{item.style}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2">
            {item.qty} x {item.price.toFixed(2)}kr
          </div>
        </div>
      ))}
      {/* <a href="./checkout"> <button>Go To Checkout</button></a> */}
      <Link to={`/checkout`} state={{cartItems:cartItems}}> <button>Go To Checkout</button></Link>
    </aside>
  );
};

export default Basket;
