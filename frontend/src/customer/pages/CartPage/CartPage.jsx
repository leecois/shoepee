import React from 'react';
import Cart from '../../components/Cart/Cart';
import Breadcrumb from '../../components/Breadcrumb';

const CartPage = () => {
  const breadcrumbItems = [{ label: 'Cart' }];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div>
        <Cart />
      </div>
    </>
  );
};

export default CartPage;
