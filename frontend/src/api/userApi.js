import StorageKeys from '../constants/storage-keys';
import axiosClient from './axiosClient';

const createApiRequest = (endpoint) => (data) => {
  const url = `auth/${endpoint}`;
  return axiosClient.post(url, data);
};

const createUser = (user) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post('auth/register', user, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const getUserById = (userId) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.get(`auth/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const getAllUsers = () => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.get('admin/users', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const updateUser = (userId, updatedUserData) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.put(`admin/users/${userId}`, updatedUserData, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const addToCart = (cartItem) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post('auth/addcart', cartItem, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const getCart = () => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.get('auth/getcart', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const removeFromCartByShoeId = (shoeId) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.delete(`/auth/delete/${shoeId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const order = () => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post('auth/placeorder', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const userApi = {
  register: createApiRequest('register'),
  login: createApiRequest('login'),
  create: createUser,
  getById: getUserById,
  getAll: getAllUsers,
  update: updateUser,
  addToCart,
  getCart,
  removeFromCartByShoeId,
  order,
};

export default userApi;
