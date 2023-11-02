import axios from 'axios';
import { API_BASE_URL } from '../constants/index';
import StorageKeys from '../constants/storage-keys';

// Define your common axios configuration
const axiosConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create an axios instance with the common configuration
const axiosClient = axios.create(axiosConfig);

// Define an axios interceptor for successful responses
axiosClient.interceptors.response.use((response) => {
  // Handle successful responses from the server
  return response.data;
});

// Define an axios interceptor for error responses
axiosClient.interceptors.response.use(undefined, function (error) {
  // Handle errors for responses from the server
  const { status, data } = error.response;

  if (status === 400) {
    const errorList = data.data || [];
    const firstError = errorList[0] || {};
    const messageList = firstError.messages || [];
    const firstMessage = messageList[0] || {};
    return Promise.reject(new Error(firstMessage.message));
  }

  return Promise.reject(error);
});

// Add an interceptor to include the Authorization header with the token
axiosClient.interceptors.request.use(
  (config) => {
    // Get the token from local storage or where it's stored
    const token = localStorage.getItem(StorageKeys.TOKEN);

    // Add the token to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
