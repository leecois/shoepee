import React from 'react';

const PlaceOrderButton = ({ onSubmit }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <button
      onClick={handleClick}
      className="w-full btn bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md font-semibold"
    >
      Place Order
    </button>
  );
};

export default PlaceOrderButton;
