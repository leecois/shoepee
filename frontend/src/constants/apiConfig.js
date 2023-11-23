import axios from 'axios';
import StorageKeys from './storage-keys';
// https://localhost:8080/api/v1
export const API_BASE_URL = 'https://3.1.85.78/api/v1';

const jwt = localStorage.getItem(StorageKeys.TOKEN);

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  },
});
