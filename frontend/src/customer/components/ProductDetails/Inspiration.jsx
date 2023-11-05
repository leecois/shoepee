import React from 'react';

const Inspiration = ({ product, selectedShoe, handleShoeButtonClick }) => {
  return (
    <div className="mt-4 w-full">
      <div className="flex">
        {product.shoe?.map((shoe) => (
          <button
            key={shoe.id}
            type="button"
            className={` inline-flex flex-col items-center mx-2 mt-4 space-y-2 rounded-3xl border-2 ${
              selectedShoe === shoe
                ? 'border border-red-400'
                : 'border border-gray-200'
            } text-left`}
            onClick={() => handleShoeButtonClick(shoe)}
          >
            <img
              src={shoe.imageUrl}
              alt={shoe.alt}
              className="object-cover p-1 w-22 h-22 rounded-3xl"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
