//rfce
import React from "react";

const Orders = (props) => {
  const { orders } = props;

  //here the user should be able to see his history of orders
  return (
    <main className="block col-2">
      <h1>History of Orders</h1>
      <div className="row">
        {orders.map((order) => (
          <div key={order._id}>
            <h2>{order.name}</h2>
            <h5>{order.completed}</h5>
            {order.orders.map((item) => (
              <div key={item._id}>
                {item.qty}x {item.style}{" "}
              </div>
            ))}
          </div>
        ))}
        ;
      </div>
    </main>
  );
};

export default Orders;
