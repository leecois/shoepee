import { createSelector } from 'reselect';

const cartItemsSelector = (state) => state.cart.cartItems;

// Count number of cart items
export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Calculate total cart items
export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
