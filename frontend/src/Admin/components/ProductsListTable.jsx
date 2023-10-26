import React from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const ProductsListTable = ({ data }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between py-6 px-4 md:px-6 xl:px-7.5">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Products
          </h4>
          <label>Manage products for Shoepee</label>
        </div>

        <button className="hover:bg-meta-2 dark:hover:text-strokedark dark:text-white transparent text-strokedark font-bold px-4 rounded">
          Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full dark:bg-strokedark divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap dark:text-white px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap dark:text-white px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap dark:text-white px-4 py-2 font-medium text-gray-900">
                Brand
              </th>
              <th className="whitespace-nowrap dark:text-white px-4 py-2 font-medium text-gray-900">
                Type
              </th>
              <th className="whitespace-nowrap dark:text-white px-4 py-2 font-medium text-gray-900">
                Size
              </th>
              <th className="whitespace-nowrap dark:text-white px-4 py-2 font-medium text-gray-900">
                Date
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y dark:bg-strokedark divide-gray-200">
            {data?.map((product) => (
              <tr>
                <td className="whitespace-nowrap dark:text-white px-4 py-2 font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="whitespace-nowrap dark:text-white px-4 py-2 text-gray-700">
                  {product.price}
                </td>
                <td className="whitespace-nowrap dark:text-white px-4 py-2 text-gray-700">
                  {product.brand.name}
                </td>
                <td className="whitespace-nowrap dark:text-white px-4 py-2 text-gray-700">
                  {product.type}
                </td>
                {product.sizes.map((size) => (
                  <td key={size} className="whitespace-nowrap dark:text-white px-4 py-2 text-gray-700">
                    {size}
                  </td>
                ))}
                <td className="whitespace-nowrap dark:text-white px-4 py-2 text-gray-700">
                  12/12/12
                </td>
                <td className="whitespace-nowrap dark:text-white px-4 py-2">
                  <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                    ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsListTable;
