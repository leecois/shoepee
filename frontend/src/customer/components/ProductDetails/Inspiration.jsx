import React from 'react';

const Inspiration = ({ product, selectedShoe, handleShoeButtonClick }) => {
  const sortedShoes =
    product.customizedShoes && Array.isArray(product.customizedShoes)
      ? [...product.customizedShoes].sort((a, b) => a.id - b.id)
      : [];

  return (
    <div className="mt-4 w-full">
      <div className="flex flex-wrap">
        {sortedShoes.map((shoe) => (
          <button
            key={shoe.id}
            type="button"
            className={`inline-flex flex-col items-center mx-2 mt-4 space-y-2 rounded-3xl border-2 ${
              selectedShoe === shoe ? 'border-red-400' : 'border-gray-200'
            }`}
            onClick={() => handleShoeButtonClick(shoe)}
          >
            <img
              src={shoe.imageUrl}
              alt={shoe.alt || 'Shoe'}
              className="object-cover p-1 w-22 h-22 rounded-3xl"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
