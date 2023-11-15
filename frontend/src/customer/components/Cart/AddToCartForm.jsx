import React from 'react';

function AddToCartForm({ onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="w-full inline-block rounded-md  text-white font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartForm;
