import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '../../../containers/selectors';

const CartSummary = () => {
  const cartTotal = useSelector(cartTotalSelector);
  return (
    <div className="bg-gray-100 shadow-lg p-8">
      <h2 className="text-xl font-bold text-center mb-4">ORDER SUMMARY</h2>
      <div className="flex justify-between mb-2">
        <div className="text-gray-600 font-semibold">SUBTOTAL</div>
        <div className="text-gray-800">${cartTotal}.00</div>
      </div>
      <div className="flex justify-between mb-2">
        <div className="text-gray-600 font-semibold">SHIPPING</div>
        <div className="text-gray-800">FREE</div>
      </div>
      <div className="flex justify-between mb-2">
        <div className="text-gray-600 font-semibold">TAX</div>
        <div className="text-gray-800">$0.00</div>
      </div>
      <div className="flex justify-between mb-4">
        <div className="text-gray-600 font-semibold">ORDER TOTAL</div>
        <div className="text-gray-800">${cartTotal}.00</div>
      </div>
      <button className="bg-black font-bold text-white px-4 py-2 mb-2 w-full hover:bg-gray-900">
        PROCEED TO CHECKOUT
      </button>
      <p className="text-center text-gray-600">
        <a className="underline hover:text-gray-800" href="#">
          Continue Shopping
        </a>
      </p>
    </div>
  );
};

export default CartSummary;
