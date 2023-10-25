import React from 'react';
import { cartTotalSelector } from '../../../containers/Cart/selectors';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartTotal = useSelector(cartTotalSelector);
  return <div>Cart {cartTotal}</div>;
};

export default Cart;
