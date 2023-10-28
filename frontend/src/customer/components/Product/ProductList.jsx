import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-span-full md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-4">
      {data?.map((model) => (
        <div key={model.modelId}>
          <Link to={`/products/${model.modelId}`} className="block group">
            <img
              src={model.imageurl}
              alt={model.modelname}
              className="h-100 w-100 rounded-lg object-cover object-center dark:bg-gray-500"
            />
            <div className="mt-1.5 flex flex-col">
              <div className="text-sm text-orange-700 font-semibold mb-2">
                Customize
              </div>
              <div className="text-md text-black font-bold group-hover:underline group-hover:underline-offset-4">
                {model.modelname}
              </div>
              <div className="flex justify-between mt-3 text-sm">
                <h3 className="text-gray-500 font-bold">
                  {model.brandId}
                </h3>
                <p className="text-black pl-4 text-md font-semibold">
                  ${model.modelname}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
