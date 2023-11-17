import { CheckIcon, EyeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import OrderDetailModal from '../../customer/components/Profile/OrderDetailModal';
import { useState } from 'react';

const OrdersTable = ({ orderList, acceptOrder }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };
  const handleProductClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };
  return (
    <div className="rounded-sm border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Orders
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Phone
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Address
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                is Accept?
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList?.content?.map((order) => (
              <tr key={order.orderId}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      ID: {order.orderId} - Items: {order.orderItem.length}{' '}
                    </h5>
                    <p className="text-sm font-bold">
                      Total: ${order.orderAmt.toFixed(2)}
                    </p>
                    <span className="font-serif text-gray-400">
                      {' '}
                      {order.user.email}
                    </span>
                  </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {order.user.phone || 'N/A'}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {order.billingAddress || 'N/A'}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      order.paymentStatus === 'NOT PAID'
                        ? 'bg-error text-error'
                        : 'bg-success text-success'
                    }`}
                  >
                    {order.paymentStatus}
                  </p>
                </td>

                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      order.status === true
                        ? 'bg-success text-success'
                        : 'bg-warning text-warning'
                    }`}
                  >
                    {order.status === true ? 'ACCEPT' : 'PENDING'}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      onClick={() => handleProductClick(order)}
                      className="text-blue-600 hover:underline mr-3"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </button>
                    {/* Accept Order Button */}
                    {order.status === false && (
                      <button
                        className="hover:text-success"
                        onClick={() => acceptOrder(order.orderId)}
                      >
                        <CheckIcon className="h-5 w-5" />
                      </button>
                    )}
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

export default OrdersTable;
