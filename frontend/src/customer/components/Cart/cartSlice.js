import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((product) => product.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.products.find((product) => product.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.products.find((product) => product.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        resetCart: (state) => {
            state.products = [];
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;