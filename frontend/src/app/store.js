import counterReducer from '../containers/Counter/counterSlice';
import userReducer from '../containers/User/userSlice';
import cartReducer from '../containers/Cart/cartSlice';

const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
