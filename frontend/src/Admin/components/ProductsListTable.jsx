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

      <div className="grid grid-cols-7 border-t gap-x-4 border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center sm:flex">
          <p className="font-medium">Brand</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">Style</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">Size</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">Date</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium"></p>
        </div>
      </div>

      {data?.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-7 border-t gap-x-4 border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={product.pictures[0]} alt={product.name} />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${product.price}</p>
          </div>
          <div className="col-span-1 flex items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.brand}
            </p>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{product.alt}</p>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.sizes}
            </p>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">{product.name}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-5">
              <EllipsisHorizontalIcon className="h-6 w-6" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsListTable;
