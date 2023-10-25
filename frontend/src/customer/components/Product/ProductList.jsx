import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ data }) {

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-span-full md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-4">
      {data?.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`} className="block group">
            <img
              src={product.pictures[0]}
              alt={product.name}
              className="h-full rounded-lg object-cover object-center dark:bg-gray-500"
            />
            <div className="mt-1.5 flex flex-col">
              <div className="text-sm text-orange-700 font-semibold mb-2">
                Customize
              </div>
              <div className="text-md text-black font-bold group-hover:underline group-hover:underline-offset-4">
                {product.name}
              </div>
              <div className="flex justify-between mt-3 text-sm">
                <h3 className="text-gray-500 font-bold">{product.brand}</h3>
                <p className="text-black pl-4 text-md font-semibold">
                  ${product.price}
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
