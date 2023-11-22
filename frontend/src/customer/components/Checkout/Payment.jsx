import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';

const Payment = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-white text-black">
      <h1 className="text-3xl font-mono font-bold text-gray-800 mb-8">
        2. Payment <LockOutlinedIcon className="text-lg align-middle" />
      </h1>

      {/* Payment Method Selection */}
      <fieldset className="space-y-4">
        <legend className="sr-only">Delivery</legend>

        <div>
          <input
            type="radio"
            name="DeliveryOption"
            value="DeliveryStandard"
            id="DeliveryStandard"
            className="peer hidden [&:checked_+_label_svg]:block"
            checked
          />

          <label
            htmlFor="DeliveryStandard"
            className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
          >
            <div className="flex items-center gap-2">
              <svg
                className="hidden h-5 w-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-gray-700">COD (Cash On Delivery)</p>
            </div>

            <p className="text-gray-900">Free</p>
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="DeliveryOption"
            value="DeliveryPriority"
            id="DeliveryPriority"
            className="peer hidden [&:checked_+_label_svg]:block"
          />

          <label
            htmlFor="DeliveryPriority"
            className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
          >
            <div className="flex items-center gap-2">
              <svg
                className="hidden h-5 w-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-gray-700 flex items-center">
                VNPAY
                <span className="h-5 w-7">
                  <svg viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="#000" stroke-linejoin="round">
                      <path d="m28.6222 37.7222 14.4444-14.4444c.5778-.5778.5778-1.7333 0-2.3111l-8.6667-8.6667c-.5778-.5778-1.7333-.5778-2.3111 0l-6.3556 6.3556-9.2444-9.2444c-.5778-.5778-1.7333-.5778-2.3111 0l-9.2444 9.2444c-.5778.5778-.5778 1.7333 0 2.3111l16.7556 16.7556c1.7333 1.7333 5.2 1.7333 6.9333 0z" />
                      <g stroke-linecap="round">
                        <path d="m25.7333 18.6556-8.0889 8.0889c-2.3111 2.3111-4.6222 2.3111-6.9333 0" />
                        <path d="m18.2222 30.7889c-1.1556 1.1556-2.3111 1.1556-3.4667 0m22.5333-15.6c-1.262-1.1556-2.8889-.5778-4.0444.5778l-15.0222 15.0222" />
                        <path d="m18.2222 15.7667c-4.6222-4.6222-10.4 1.1556-5.7778 5.7778l5.2 5.2-5.2-5.2" />
                        <path d="m23.4222 20.9667-4.0444-4.0444" />
                        <path d="m21.6889 22.7-4.6222-4.6222c-.5778-.5778-1.4444-1.4444-2.3111-1.1556" />
                        <path d="m14.7556 20.3889c-.5778-.5778-1.4444-1.4444-1.1556-2.3111m5.7778 6.9333-4.6222-4.6222" />
                      </g>
                    </g>
                  </svg>
                </span>
              </p>
            </div>
          </label>
        </div>
      </fieldset>

      {/* Secure Checkout */}
      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <button className="btn bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md font-semibold">
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
