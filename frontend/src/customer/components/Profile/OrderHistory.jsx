import React from 'react';

const OrderHistory = () => {
  return (
    <div className="overflow-x-auto">
        <h1 className="text-3xl font-semibold text-black dark:text-white">RECENT ORDERS</h1>
      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Products</th>
              <th>Status</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
