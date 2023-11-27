import React from 'react';

const PaymentSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-gold mb-8">
          <h1 className="mb-4 text-5xl font-extrabold text-dark-gray sm:text-6xl">
            Payment Successful
          </h1>

          <p className="mb-8 text-lg text-mid-gray">
            Your transaction has been completed successfully. Track your order
            in{' '}
            <a className="text-deep-black underline" href="/user/purchase">
              your purchases.
            </a>
          </p>
        </div>
        <div>
          <a
            href="/"
            className="px-6 py-3 text-sm font-medium text-white bg-black rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
