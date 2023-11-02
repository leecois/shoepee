const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});
const { actions, reducer } = counterSlice;
export const { increment, decrease } = actions;
export default reducer;
