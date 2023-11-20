import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '../../../containers/selectors';

const CartSummary = () => {
  const cartTotal = useSelector(cartTotalSelector);
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-mono font-bold text-black text-center mb-6">
        Order Summary
      </h2>
      <div className="flex justify-between mb-4">
        <div className="text-gray-700 font-medium">Subtotal</div>
        <div className="font-mono text-lg text-black">${cartTotal}</div>
      </div>
      <div className="flex justify-between mb-4">
        <div className="text-gray-700 font-medium">Shipping</div>
        <div className="font-mono text-lg text-black">Free</div>
      </div>
      <div className="flex justify-between mb-4">
        <div className="text-gray-700 font-medium">Tax</div>
        <div className="font-mono text-lg text-black">$0.00</div>
      </div>
      <div className="flex justify-between mt-6 pt-6 border-t border-gray-200">
        <div className="text-gray-800 font-bold uppercase">Total</div>
        <div className="font-mono text-2xl text-black font-bold">
          ${cartTotal}
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
