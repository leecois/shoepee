import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storage-keys';

// Helper function to save data to local storage
const saveDataToLocalStorage = (data) => {
  if (data.access_token) {
    localStorage.setItem(StorageKeys.TOKEN, data.access_token);
  }
  if (data.user) {
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  }
  // Save the authentication status
  localStorage.setItem(StorageKeys.IS_AUTHENTICATED, 'true');
};

// Helper function to load authentication status from local storage
const loadAuthenticationStatusFromLocalStorage = () => {
  const isAuthenticated = localStorage.getItem(StorageKeys.IS_AUTHENTICATED);
  return isAuthenticated === 'true';
};

export const register = createAsyncThunk('user/register', async (payload) => {
  try {
    const data = await userApi.register(payload);
    saveDataToLocalStorage(data);
    return data.user;
  } catch (error) {
    throw error;
  }
});

export const login = createAsyncThunk('user/login', async (payload) => {
  try {
    const data = await userApi.login(payload);
    saveDataToLocalStorage(data);
    return data.user;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {},
    isAuthenticated: loadAuthenticationStatusFromLocalStorage(),
  },
  reducers: {
    clearUserData: (state) => {
      state.current = {};
      state.isAuthenticated = false;
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.IS_AUTHENTICATED);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.current = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;
        state.isAuthenticated = true;
      });
  },
});

const { reducer, actions } = userSlice;

export const { clearUserData } = actions;

export default reducer;
