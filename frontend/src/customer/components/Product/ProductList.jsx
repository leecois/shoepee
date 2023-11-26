import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ modelList }) {
  if (!modelList || modelList.length === 0) {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse space-y-4 p-4 border border-gray-200 rounded-lg"
          >
            <div className="h-60 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
            <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
            <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {modelList.map((model) => (
        <Link
          key={model.id}
          to={`/products/${model.modelname}`}
          className="block group"
        >
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src={model.shoes[0]?.imageUrl}
              alt={model.modelname}
              className="h-60 w-full object-cover rounded-t-lg mb-4"
            />
            <div>
              <span className="text-sm text-gray-500 font-semibold">
                {model.brandDto.brandName}
              </span>
              <h3 className="text-lg text-gray-900 font-bold mt-1 group-hover:underline">
                {model.modelname}
              </h3>
              <p className="text-md text-gray-900 font-semibold">
                {model.shoes[0]?.price.toLocaleString('de-DE')} VND
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
