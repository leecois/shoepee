import React from 'react';
import Cart from '../../components/Cart/Cart';
import Breadcrumb from '../../components/Breadcrumb';
import CartSummary from '../../components/Cart/CartSummary';

const CartPage = () => {
  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: "Cart" },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 m-8">
        <div class="h-full rounded-lg  lg:col-span-2">
          <Cart />
        </div>
        <div class="h-full rounded-lg ">
          <CartSummary />
        </div>
        <span></span>
      </div>
    </>
  );
};

export default CartPage;
