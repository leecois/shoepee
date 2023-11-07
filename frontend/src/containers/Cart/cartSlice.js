import { createSlice } from '@reduxjs/toolkit';
import axiosClient from '../../api/axiosClient';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart: (state) => {
      state.showMiniCart = true;
    },
    hideMiniCart: (state) => {
      state.showMiniCart = false;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const index = state.cartItems.findIndex(
        (x) =>
          x.id === newItem.id &&
          x.size === newItem.size &&
          x.shoe === newItem.shoe
      );
    
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');
    
      // Check if token exists
      if (token) {
        if (index >= 0) {
          // Increase quantity
          state.cartItems[index].quantity += newItem.quantity;
        } else {
          // Add to cart
          state.cartItems.push(newItem);
        }
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
    
        // Post the cart data to the API
        axiosClient.cart.addToCart(newItem)
          .then(response => {
            console.log('Item added to cart successfully');
          })
          .catch(error => {
            console.error('Error adding item to cart', error);
          });
      } else {
        // Redirect to login page or show an error message
        console.error('You must be logged in to add items to the cart');
      }
    },
    setSize(state, action) {
      const { id, size } = action.payload;
      const item = state.cartItems.find((product) => product.id === id);
      if (item) {
        item.size = size;
      }
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.cartItems = state.cartItems.filter(
        (x) => x.id !== id || x.size !== size
      );
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setSize,
  removeFromCart,
} = actions;

export default reducer;
