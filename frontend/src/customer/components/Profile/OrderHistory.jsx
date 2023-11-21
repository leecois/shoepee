import React, { useState } from 'react';
import userApi from '../../../api/userApi';
import OrderDetailModal from './OrderDetailModal';

const OrderHistory = ({ orders, selectedTab }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('COD');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredOrders = orders.filter((order) => {
    if (selectedTab === 'ALL') {
      return true; // Hiển thị tất cả các đơn hàng khi 'ALL' được chọn
    } else if (selectedTab === 'To Ship' && order.orderStatus === 'SHIPPING') {
      return true; // Hiển thị các đơn hàng có trạng thái 'SHIPPING' khi 'To Ship' được chọn
    } else if (
      selectedTab === 'Completed' &&
      order.orderStatus === 'COMPLETED'
    ) {
      return true; // Hiển thị các đơn hàng có trạng thái 'COMPLETED' khi 'Completed' được chọn
    } else if (
      selectedTab === 'Cancelled' &&
      order.orderStatus === 'CANCELLED'
    ) {
      return true; // Hiển thị các đơn hàng có trạng thái 'CANCELLED' khi 'Cancelled' được chọn
    } else if (
      selectedTab === 'To Pay' &&
      (order.paymentStatus === 'NOT PAID' || order.paymentStatus === 'PAID') &&
      order.orderStatus !== 'SHIPPING' &&
      order.orderStatus !== 'COMPLETED'
    ) {
      return true; // Display orders with 'NOT PAID' or 'PAID' payment status and not 'SHIPPING' or 'COMPLETED' order status when 'To Pay' is selected
    }
    return false;
  });

  const handlePaymentClick = async (orderId) => {
    try {
      if (selectedPaymentMethod === 'COD') {
        // Xử lý thanh toán bằng COD
        const response = await userApi.payOrder(orderId);
        console.log(response);
      } else if (selectedPaymentMethod === 'Bank') {
        // Xử lý thanh toán bằng Bank Transfer
        // Hiển thị thông báo hoặc hướng dẫn cho người dùng thực hiện chuyển khoản ngân hàng
        console.log('Please make a bank transfer for this order.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };
  if (!orders || orders.length === 0) {
    return (
      <div className="min-h-[340px] flex flex-col justify-center items-center space-y-4 bg-gray-100">
        <p className="text-2xl font-bold text-gray-700">No orders yet</p>
      </div>
    );
  }
  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Months are 0 based
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  return (
    <div className="overflow-x-auto bg-[#E5E5E5]">
      {filteredOrders.length === 0 ? (
        <div className="min-h-[340px] flex flex-col justify-center items-center space-y-4 bg-gray-100">
          <p className="text-2xl font-bold text-gray-700">No orders yet</p>
        </div>
      ) : (
        filteredOrders
          ?.slice()
          .reverse()
          .map((order) => (
            <div key={order.orderId} className="mb-4 p-2 bg-white shadow-lg">
              <div className="flex items-center justify-between pb-4 my-4 pt-4 border-b border-gray-300">
                <span className="text-sm font-medium text-gray-600">
                  {formatDate(order.orderCreateAt)}
                </span>

                <div className="space-x-2">
                  <div
                    className={`font-semibold ${
                      order.paymentStatus === 'PAID'
                        ? 'btn btn-success no-animation text-white cursor-default'
                        : order.paymentStatus === 'NOT PAID'
                        ? 'btn btn-warning no-animation text-white cursor-default'
                        : order.paymentStatus === 'CANCELLED'
                        ? 'btn btn-error no-animation text-white cursor-default'
                        : ''
                    }`}
                  >
                    {order.paymentStatus} ({selectedPaymentMethod})
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {order.orderItem
                  ?.slice()
                  .sort((a, b) => a.orderItemId - b.orderItemId)
                  .map((product) => (
                    <div
                      key={product.orderItemId}
                      className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
                    >
                      <img
                        src={product.shoeDto?.imageUrl}
                        alt={product.shoeDto?.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="ml-4 flex-1">
                        <h5 className="text-lg font-semibold text-gray-800">
                          {product.shoeDto?.name}
                        </h5>
                        <p className="text-sm text-gray-500">
                          {product.variation}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          Quantity: {product.productQuantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-700">
                          ${product.totalProductprice}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300">
                <span className="text-lg font-medium text-gray-600">
                  Order Total: ${order.orderAmt}
                </span>
                {order.paymentStatus === 'NOT PAID' && (
                  <div className="flex justify-between">
                    <button
                      className="btn btn-neutral mx-2"
                      onClick={() => handlePaymentClick(order.orderId)}
                    >
                      Pay Now
                    </button>
                    <button className="btn btn-outline btn-error">
                      Cancel Order
                    </button>
                  </div>
                )}
                {(order.paymentStatus === 'CANCELLED' ||
                  order.paymentStatus === 'COMPLETED') && (
                  <div className="space-x-2">
                    <button className="btn btn-neutral">Buy Again</button>
                  </div>
                )}
              </div>
            </div>
          ))
      )}
      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default OrderHistory;
