import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';

const Payment = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">
        2. Payment{' '}
        <span className="align-middle text-gray-600">
          <LockOutlinedIcon className="text-lg" />
        </span>
      </h1>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Method</h2>
        <div className="flex flex-col space-y-4">
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="mr-2" />
            Credit Card
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="mr-2" />
            PayPal
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="mr-2" />
            Bitcoin
          </label>
        </div>
      </div>

      {/* Billing Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Billing Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="input input-bordered w-full" />
          <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
          <input type="text" placeholder="Email Address" className="input input-bordered w-full" />
          <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
        </div>
      </div>

      {/* Secure Checkout */}
      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <p className="text-gray-600">Secure checkout</p>
        <button className="btn bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-md">
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
