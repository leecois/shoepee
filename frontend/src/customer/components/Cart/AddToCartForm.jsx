import React from 'react';

function AddToCartForm({ onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="w-full inline-block rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 tracking-wide"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartForm;
