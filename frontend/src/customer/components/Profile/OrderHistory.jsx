import { EyeIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import userApi from '../../../api/userApi';
import OrderDetailModal from './OrderDetailModal';

const OrderHistory = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="overflow-x-auto bg-[#E5E5E5]">
      {orders?.map((order, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="space-y-4">
            {order.products?.map((product, productIndex) => (
              <div
                key={productIndex}
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
              >
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h5 className="text-lg font-semibold text-gray-800">
                    {product.productName}
                  </h5>
                  <p className="text-sm text-gray-500">{product.variation}</p>
                  <p className="text-sm font-medium text-gray-700">
                    Quantity: {product.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800 line-through">
                    {product.originalPrice}
                  </p>
                  <p className="text-lg font-semibold text-red-500">
                    {product.discountedPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300">
            <span className="text-sm font-medium text-gray-600">
              Order Total: {order.orderTotal}
            </span>
            <div className="space-x-2">
              <button className="text-sm bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                Buy Again
              </button>
              <button className="text-sm bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      ))}
      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default OrderHistory;
