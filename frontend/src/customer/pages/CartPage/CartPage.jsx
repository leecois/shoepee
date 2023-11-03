import React from 'react';
import { useLocalStorageData } from '../../../containers/selectors';
import Breadcrumb from '../../components/Breadcrumb';
import Cart from '../../components/Cart/Cart';
import CartSummary from '../../components/Cart/CartSummary';

const CartPage = () => {
  const cartItems = useLocalStorageData('cart');

  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: 'Cart' },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 m-8">
        <div class="h-full rounded-lg  lg:col-span-2">
          <Cart cartItems={cartItems} />
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
