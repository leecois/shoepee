import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderDetailModal from './OrderDetailModal';
import { EyeIcon } from '@heroicons/react/24/outline';
import userApi from '../../../api/userApi';

const OrderHistory = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handlePaymentClick = async (orderId) => {
    try {
      const response = await userApi.payOrder(orderId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-semibold text-black dark:text-white">
        RECENT ORDERS
      </h1>
      <div className="border-b border-gray-300 py-4 px-7">
        <table className="w-full text-sm text-center text-black-2 font-semibold dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Order ID
              </th>
              <th scope="col" className="py-3 px-6">
                Order Status
              </th>
              <th scope="col" className="py-3 px-6">
                Payment Status
              </th>
              <th scope="col" className="py-3 px-6">
                Delivered
              </th>
              <th scope="col" className="py-3 px-6">
                Total Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Billing Address
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="py-4 px-6">{order.orderId}</td>
                <td className="py-4 px-6">{order.orderStatus}</td>
                <td className="py-4 px-6">
                  {order.paymentStatus}{' '}
                  {order.paymentStatus === 'NOT PAID' && (
                    <button
                      onClick={() => handlePaymentClick(order.orderId)}
                      className="text-red-600 font-bold hover:underline"
                    >
                      (Pay Now)
                    </button>
                  )}
                </td>
                <td className="py-4 px-6">
                  {order.orderDelivered ? 'Yes' : 'No'}
                </td>
                <td className="py-4 px-6">${order.orderAmt.toFixed(2)}</td>
                <td className="py-4 px-6">{order.billingAddress}</td>
                <td className="py-4 px-6">
                  <div className="tooltip tooltip-right tooltip-info" data-tip="Detail">
                    <button
                      onClick={() => handleProductClick(order)}
                      className="text-blue-600 hover:underline mr-3"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default OrderHistory;
