import React from 'react';

const OrderDetailModal = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  return (
    <div
      className={`${
        isOpen ? 'fixed' : 'hidden'
      } z-10 inset-0 overflow-y-auto flex items-center justify-center p-4`}
    >
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full overflow-auto text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Order Details - ID: {order.orderId}
          </h2>
          <div className="mb-6">
            <p className="mb-1">Status: {order.orderStatus}</p>
            <p className="mb-1">Payment Status: {order.paymentStatus}</p>
            <p className="mb-1">Total Amount: ${order.orderAmt.toFixed(2)}</p>
            <p>Billing Address: {order.billingAddress}</p>
          </div>

          <div className="font-semibold mb-3">Purchased Products:</div>
          <ul>
            {order.orderItem?.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-600 last:border-b-0 flex items-center p-2"
              >
                <img
                  src={item.shoeDto.imageUrl}
                  alt={item.shoeDto?.modelname}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p>
                    {item.shoeDto?.shoeModelDto?.modelname} ($
                    {item.shoeDto?.shoeModelDto?.price})
                  </p>
                  <p>Customize Price: ${item.shoeDto?.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
