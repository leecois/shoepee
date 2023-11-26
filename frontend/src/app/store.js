import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../containers/Cart/cartSlice';
import ordersReducer from '../containers/Cart/orderSlice';
import counterReducer from '../containers/Counter/counterSlice';
import userReducer from '../containers/User/userSlice';

// rootReducer remains the same
const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
  orders: ordersReducer,
};

const store = configureStore({
  reducer: rootReducer,
  // Removed preloadedState for lazy loading
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({

    }),
  // Add any additional store enhancers or middleware here
});

export const loadInitialCartState = () => {
  const initialCartState = JSON.parse(localStorage.getItem('cart')) || [];
  store.dispatch({ type: 'cart/setInitialCartState', payload: initialCartState });
};

export default store;
