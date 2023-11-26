import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import CartSummary from '../../components/Cart/CartSummary';
import Checkout from '../../components/Checkout/Checkout';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: 'Cart', url: '/cart' },
    { label: 'Checkout' },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <details open className="mb-4">
              <summary className="text-lg font-semibold text-gray-800">
                Cart ({cartItems?.length})
              </summary>
              <div className="mt-4">
                {cartItems
                  ?.slice()
                  .sort((a, b) => a.cartItemId - b.cartItemId)
                  .map((item) => (
                    <div
                      key={item.cartItemId}
                      className="py-4 border-b border-gray-200"
                    >
                      <h1 className="text-md pb-4 font-bold text-gray-900">
                        {item.shoe.shoeModelDto.modelname}
                      </h1>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={item.shoe?.imageUrl || item.image}
                            alt="Product"
                            className="w-20 h-20 object-cover mr-4"
                          />
                          <div className="">
                            <p className="text-sm text-gray-600">
                              {item.shoe.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              Size: {item.size}
                            </p>
                            <p className="text-sm text-gray-600">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2.5 mt-2">
                          {item.shoe?.price.toLocaleString('de-DE')} VND
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </details>
            <CartSummary />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
