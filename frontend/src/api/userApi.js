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

const createAdmin = (admin) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post('auth/registeradmin', admin, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
const createStaff = (staff) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post('auth/registerstaff', staff, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const getUserInfo = (userId) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.get(`auth/inforuser/${userId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const addUserInfo = (userId, newUserData) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.put(`auth/inforuser/${userId}`, newUserData, {
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
  return axiosClient.put(`/edituser/${userId}`, updatedUserData, {
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
const addToCartCustomization = (cartItem) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post('auth/addcartcustomize', cartItem, {
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

const order = (orderData) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post('auth/placeorder', orderData, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const payOrder = (orderId) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post(`auth/pay`, orderId, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const cancelOrder = (orderId) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.get(`auth/cancelorder/${orderId}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const getOrderById = () => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.get('auth/getorderbyuserid', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

const changePassword = (data) => {
  const jwt = localStorage.getItem(StorageKeys.TOKEN);
  return axiosClient.post('auth/change-password', data, {
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
  addToCartCustomization,
  getOrderById,
  addUserInfo,
  getUserInfo,
  payOrder,
  cancelOrder,
  changePassword,
  createAdmin,
  createStaff,
};

export default userApi;
