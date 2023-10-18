import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../api/userApi";
import StorageKeys from "../../../constants/storage-keys";

// Helper function to save data to local storage
const saveDataToLocalStorage = (data) => {
  if (data.jwt) {
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  }
  if (data.user) {
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  }
};

export const register = createAsyncThunk("user/register", async (payload) => {
  try {
    const data = await userApi.register(payload);
    saveDataToLocalStorage(data);
    return data.user;
  } catch (error) {
    throw error; // Re-throw the error for error handling in components
  }
});

export const login = createAsyncThunk("user/login", async (payload) => {
  try {
    const data = await userApi.login(payload);
    saveDataToLocalStorage(data);
    return data.user;
  } catch (error) {
    throw error; // Re-throw the error for error handling in components
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: null, // You can set initial state to null or an empty object
    settings: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  },
});

export default userSlice.reducer;
