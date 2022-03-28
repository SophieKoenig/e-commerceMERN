import React from "react";

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
       <button>Go To Checkout</button>
    </aside>
  );
};

export default Basket;
