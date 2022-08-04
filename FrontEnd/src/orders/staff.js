import React from "react";

const Staff = (props) => {
  const { orders, updateOrders, deleteOrder } = props;
  return (
    <aside className="block col-1">
      <h1>Staff Side</h1>
      <div className="row">
        {orders.map((order) => (
          <div key={order._id}>
            <h2>{order.name}</h2>
            <div key={order.name}>
              <button onClick={updateOrders} value={order.name}>
                Done
              </button>
              <button onClick={deleteOrder} value={order.name}>
                Delete
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    </aside>
  );
};

export default Staff;
