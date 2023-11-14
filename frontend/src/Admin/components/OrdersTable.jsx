import React from 'react';
import {
  CloudArrowDownIcon,
  EyeIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const OrdersTable = ({ orderList }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Products
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
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.orderList.content?.map((order) => (
              <tr key={order.orderId}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  {order.orderItem.map((item, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-black dark:text-white">
                        {item.shoeDto.shoeModelDto.modelname}
                      </h5>
                      <p className="text-sm">${item.shoeDto.price}</p>
                    </div>
                  ))}
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
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <EyeIcon className="h-5 w-5" />
                    </button>
                    <button className="hover:text-primary">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                    <button className="hover:text-primary">
                      <CloudArrowDownIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
