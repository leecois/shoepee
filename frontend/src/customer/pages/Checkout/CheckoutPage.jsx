import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import Checkout from '../../components/Checkout/Checkout';
import Payment from '../../components/Checkout/Payment';
import CartSummary from '../../components/Cart/CartSummary';

const CheckoutPage = () => {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: 'Cart', url: '/cart' },
    { label: 'Checkout' },
  ];

  const handleCheckoutSuccess = () => {
    setCheckoutSuccess(true);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <Checkout
              onSuccess={handleCheckoutSuccess}
              disabled={checkoutSuccess}
            />
          </div>
          {!checkoutSuccess ? (
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
              <details open className="mb-4">
                <summary className="text-lg font-semibold text-gray-800">
                  Cart ({cartItems?.length})
                </summary>
                <div className="mt-4">
                  {cartItems?.map((item) => (
                    <div
                      key={item.id}
                      className="py-4 border-b border-gray-200"
                    >
                      <h1 className="font-mono text-md font-bold text-gray-900">
                        {item.shoe.shoeModelDto.modelname}
                      </h1>
                      <div className="flex items-center">
                        <img
                          src={item.shoe?.imageUrl || item.image}
                          alt="Product"
                          className="w-20 h-20 object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-medium text-black">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            Size: {item.size}
                          </p>
                          <div className="flex gap-2.5 mt-2">
                            <span className="text-sm text-gray-800">
                              ${item.shoe?.price}
                            </span>
                            <span className="text-sm text-gray-600">
                              x {item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
              <CartSummary />
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
              <Payment />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
