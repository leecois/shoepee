import { createSlice } from '@reduxjs/toolkit';

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
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);  
      if (index >= 0) {
        // Increase quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        // Add to cart
        state.cartItems.push(newItem);
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
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
    resetCart: (state) => {
      state.cartItems = [];
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
