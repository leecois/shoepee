import userSlice from '../Authentication/userSlice';

const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  user: userSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
