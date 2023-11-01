import { useEffect, useState } from 'react';
import { createSelector } from 'reselect';

const cartItemsSelector = (state) => state.cart.cartItems;
//user selector

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

export const cartProductNamesSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.map((item) => item.name)
);

export const cartProductImagesSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.map((item) => item.image)
);

export const cartProductSizesSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.map((item) => item.size)
);

export const cartProductPricesSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.map((item) => item.price)
);

// USER
export const useLocalStorageData = (key) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      setData(storedData);
    }
  }, [key]);

  return data;
};