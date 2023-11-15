import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const addToCartAsync = createAsyncThunk(
  'cart/addToCartAsync',
  async (cartItem, thunkAPI) => {
    try {
      const response = await userApi.addToCart(cartItem);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addToCartCustomizationAsync = createAsyncThunk(
  'cart/addToCartCustomizationAsync',
  async (cartItem, thunkAPI) => {
    try {
      const response = await userApi.addToCartCustomization(cartItem);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getCartAsync = createAsyncThunk(
  'cart/getCartAsync',
  async (_, thunkAPI) => {
    try {
      const response = await userApi.getCart();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCartAsync = createAsyncThunk(
  'cart/removeFromCart',
  async (shoeId, { rejectWithValue }) => {
    try {
      const response = await userApi.removeFromCartByShoeId(shoeId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const placeOrderAsync = createAsyncThunk(
  'cart/placeOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await userApi.order(orderData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    user: {},
    cartId: null,
    orderPlaced: false,
    showMiniCart: false,
    cartItems: [],
    isLoading: false,
    error: null,
    content: [],
  },
  reducers: {
    showMiniCart: (state) => {
      state.showMiniCart = true;
    },
    hideMiniCart: (state) => {
      state.showMiniCart = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        const newItem = action.payload;
        if (!newItem || newItem.quantity === undefined) {
          // Handle the error: newItem is not structured correctly
          console.error('New item is undefined or missing quantity');
          return;
        }
        const index = state.cartItems.findIndex(
          (item) => item.shoeId === newItem.shoeId && item.size === newItem.size
        );
        if (index !== -1) {
          state.cartItems[index].quantity += newItem.quantity;
        } else {
          state.cartItems.push({
            ...newItem,
            quantity: newItem.quantity,
          });
        }
        state.isLoading = false;
      })

      .addCase(addToCartAsync.rejected, (state, action) => {
        // Here you handle any errors, e.g., displaying an error message in your UI
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCartAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // Handle the getCartAsync fulfilled state
      .addCase(getCartAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.cartItems = action.payload.items;
          state.cartId = action.payload.cartId;
          state.user = action.payload.user;
          state.isLoading = false;
        } else {
          console.error('Payload is undefined');
        }
      })
      // Handle the getCartAsync rejected state
      .addCase(getCartAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeFromCartAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        const cartItemId = action.payload;

        state.cartItems = state.cartItems.filter(
          (item) => item.shoe.id !== cartItemId
        );
        state.isLoading = false;
      })
      .addCase(removeFromCartAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(placeOrderAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(placeOrderAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderPlaced = true;
        // Assuming the API returns the order data you want to store
        state.content = action.payload; // or however you want to store it
      })
      // Handle placeOrderAsync rejected state
      .addCase(placeOrderAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.orderPlaced = false;
      });
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  getCart,
  setSize,
  removeFromCart,
} = actions;

export default reducer;
