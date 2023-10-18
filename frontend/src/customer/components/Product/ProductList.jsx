import PropTypes from "prop-types";
import React from "react";

const ProductList = ({ data }) => {
  return (
    <div className="col-span-full md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <div key={product.id}>
          <a href="/product/productdetail" className="block group">
            <img
              alt={product.name}
              className="h-full rounded-lg object-cover object-center dark:bg-gray-500"
            />
            <div className="mt-1.5">
              <div className="text-lg text-orange-700 font-bold">Customize</div>
              <div className="flex justify-between mt-3 text-sm">
                <h3 className="text-gray-500 font-bold">{product.name}</h3>
              </div>
              <div className="flex justify-between mt-3 text-sm">
                <h3 className="text-black font-bold group-hover:underline group-hover:underline-offset-4">
                  {product.name}
                </h3>
                <p className="text-black text-md font-semibold">
                  ${product.salePrice}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
      ;
    </div>
  );
};

ProductList.propTypes = {
  product: PropTypes.object,
};

export default ProductList;
