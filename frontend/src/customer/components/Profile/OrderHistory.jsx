import React from 'react';

const OrderHistory = () => {
  // Assuming you fetch this data from an API or your Redux store
  const userOrders = [
    {
      orderId: '12345',
      orderDate: '2021-12-01',
      products: [{ name: 'Shoe Model A', quantity: 1 }],
      status: 'Delivered',
      totalAmount: '100.00'
    },
    // ... other orders
  ];

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-semibold text-black dark:text-white">RECENT ORDERS</h1>
      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Products</th>
              <th>Status</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {userOrders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.orderDate}</td>
                <td>
                  {order.products.map((product, index) => (
                    <div key={index}>{product.name} (x{product.quantity})</div>
                  ))}
                </td>
                <td>{order.status}</td>
                <td>${order.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
