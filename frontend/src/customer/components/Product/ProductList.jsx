import { Skeleton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ modelList }) {
  if (modelList.length === 0 || !modelList) {
    // Display skeletons if modelList is empty or loading
    return (
      <div className="w-full col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <Skeleton
              variant="rectangular"
              className="h-60 w-full bg-gray-200 rounded-lg"
            />
            <Skeleton variant="text" className="h-6 bg-gray-200 rounded mt-2" />
            <Skeleton variant="text" className="h-6 bg-gray-200 rounded mt-2" />
            <Skeleton variant="text" className="h-6 bg-gray-200 rounded mt-2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {modelList?.map((model) => (
        <div key={model.id} className="group">
          <Link to={`/products/${model.modelname}`} className="block">
            <img
              src={model.shoes[0]?.imageUrl}
              alt={model.modelname}
              className="h-60 w-full rounded-lg object-cover object-center dark:bg-gray-500"
            />
            <div className="mt-2 flex flex-col">
              <span className="text-sm text-orange-500 font-semibold">
                Customize
              </span>
              <h3 className="text-lg text-gray-900 font-bold group-hover:underline group-hover:underline-offset-4">
                {model.modelname}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">
                  {model.brandDto.brandName}
                </span>
                <span className="text-md text-gray-900 font-semibold">
                  ${model.price}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
