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

export const getCartAsync = createAsyncThunk(
  'cart/getCartAsync',
  async (_, thunkAPI) => {
    try {
      const response = await userApi.getCart();
      return response; // Make sure you return the whole response object if needed
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// Asynchronous thunk for marking an item as unavailable in the cart
export const removeFromCartAsync = createAsyncThunk(
  'cart/removeFromCartAsync',
  async ({ cartItemId }, thunkAPI) => {
    try {
      // Call the existing API to mark the item as unavailable
      const response = await userApi.markItemAsUnavailable(cartItemId);
      if (response.status === 200) {
        // Return the cartItemId to identify which item was updated
        return { cartItemId };
      } else {
        // Handle any responses that indicate failure
        return thunkAPI.rejectWithValue('Could not update the item status.');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
    isLoading: false, // Added to track loading state
    error: null, // Added to track error state
  },
  reducers: {
    // Here you can still have your other reducers like showMiniCart, hideMiniCart, etc.
    showMiniCart: (state) => {
      state.showMiniCart = true;
    },
    hideMiniCart: (state) => {
      state.showMiniCart = false;
    },
    // You might want to remove `addToCart` if you're replacing it with the async thunk
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        // Here you handle the pending state, e.g., showing a loading spinner in your UI
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
        const updatedItem = action.payload;
        // Find the item in the cart and update its status
        const index = state.cartItems.findIndex(
          (item) => item.cartItemId === updatedItem.cartItemId
        );
        if (index !== -1) {
          state.cartItems[index].shoe.status = 'unavailable';
        }
        state.cartItems = state.cartItems.filter(item => item.shoe.status === 'available');
        state.isLoading = false;
      })
      .addCase(removeFromCartAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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
