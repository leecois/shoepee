import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import Cart from '../../components/Cart/Cart';
import CartSummary from '../../components/Cart/CartSummary';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: 'Cart' },
  ];
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-100">
        <p className="text-2xl font-bold text-gray-700">
          THERE ARE NO ITEMS IN YOUR CART.
        </p>
        <Link 
          to={'/products'} 
          className="btn btn-active btn-neutral"
        >
          Shop Now
        </Link>
      </div>
    );
  }
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="min-h-screen grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 m-8">
        <div className="h-full rounded-lg  lg:col-span-2">
          <Cart cartItems={cartItems} />
        </div>
        <div className="h-full rounded-lg ">
          <CartSummary />
          <button
            onClick={handleCheckoutClick}
            className="bg-black font-bold text-white px-4 py-2 mb-2 w-full hover:bg-gray-900"
          >
            PROCEED TO CHECKOUT
          </button>
          <p className="text-center text-gray-600">
            <a className="underline hover:text-gray-800" href="/products">
              Continue Shopping
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartPage;
