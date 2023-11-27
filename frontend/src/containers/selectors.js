import { createSelector } from 'reselect';

const cartItemsSelector = (state) => state.cart.cartItems;
//user selector

// Count number of cart items
export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item?.quantity, 0)
);

// Calculate total cart items with two decimal places
export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems
      .reduce((total, item) => total + (item?.totalprice ?? 0), 0)
      .toLocaleString('de-DE') // This will convert the total to a string with 2 decimal places
);

