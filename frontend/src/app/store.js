import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../containers/Counter/counterSlice';
import userReducer from '../containers/User/userSlice';
import cartReducer, { addToCart } from '../containers/Cart/cartSlice'; // Import addToCart action if necessary

const initialCartState = JSON.parse(localStorage.getItem('cart')) || [];

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    cart: {
      cartItems: initialCartState,
    },
  },
});


export default store;
