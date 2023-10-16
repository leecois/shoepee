const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },

    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increment, decrement, incrementByAmount } = actions;
export default reducer;
