import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Checkout from '../../components/Checkout/Checkout';
import Payment from '../../components/Checkout/Payment';
import CartSummary from '../../components/Cart/CartSummary';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: 'Cart', url: '/cart' },
    { label: 'Checkout' },
  ];
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 m-8">
        <div className="h-full rounded-lg ">
          <h1 className="pl-6 font-semibold">Have a Shoepee account?</h1>
          <button className="pl-6 text-sm text-gray-500">
            Join Now / Sign-In.
          </button>
          <Checkout />
          <Payment />
        </div>
        <div className="h-full rounded-lg ">
          <details className="collapse border border-glass">
            <summary className="collapse-title text-md font-medium">
              Cart 
            </summary>
            {cartItems?.map((item) => (
              <div key={item.id} className="collapse-content">
                <div className="flex items-center justify-start py-6 px-4 border-b border-stroke">
                  <img
                    src={item.shoe?.imageUrl || item.image}
                    alt="Product"
                    className="w-20"
                  />

                  <div className="ml-4">
                    <h4 className="font-semibold text-black dark:text-white">
                      {item.name}
                    </h4>
                    <h3 className="text-sm text-black dark:text-white">
                      Size: {item.size}
                    </h3>
                    <div className="flex gap-2.5">
                      <span className="text-sm text-black dark:text-white">
                        ${item.price}
                      </span>
                      <span className="text-sm text-black dark:text-white">
                        x {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="tabs justify-center">
              <a href="/cart" className="indicator tab tab-lifted tab-active">
                Edit Cart
              </a>
            </div>
          </details>
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
