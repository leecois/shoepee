import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../containers/Cart/cartSlice'; 
import counterReducer from '../containers/Counter/counterSlice';
import userReducer from '../containers/User/userSlice';

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
