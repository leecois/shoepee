import React from 'react';

const Payment = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-neutral-50 text-gray-800">
      <h1 className="text-4xl font-bold text-black mb-10">Payment Method</h1>

      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <legend className="sr-only">Payment Option</legend>

        {/* COD Option */}
        <div className="flex flex-col items-start justify-start p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
          <input
            type="radio"
            name="PaymentOption"
            value="COD"
            id="COD"
            className="peer hidden"
            defaultChecked
          />
          <label
            htmlFor="COD"
            className="w-full cursor-pointer flex flex-col items-start justify-start"
          >
            <p className="text-lg font-medium text-gray-800">COD</p>
            <p className="mt-2 text-sm text-gray-600">(Cash On Delivery)</p>
            <svg
              className="mt-4 h-6 w-6 text-green-600 peer-checked:block hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* SVG path here */}
            </svg>
          </label>
        </div>

        {/* VNPAY Option */}
        <div className="flex flex-col items-start justify-start p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
          <input
            type="radio"
            name="PaymentOption"
            value="VNPAY"
            id="VNPAY"
            className="peer hidden"
          />
          <label
            htmlFor="VNPAY"
            className="w-full cursor-pointer flex flex-col items-start justify-start"
          >
            <p className="text-lg font-medium text-gray-800">VNPAY</p>
            <svg
              className="mt-4 h-6 w-6 text-green-600 peer-checked:block hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* SVG path here */}
            </svg>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Payment;
