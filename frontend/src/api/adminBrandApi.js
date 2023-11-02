// adminBrandApi.js
import axiosClient from './axiosClient';

const adminBrandApi = {
  async getAll() {
    const url = `/admin/brands`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/admin/brands/${id}`;
    return axiosClient.get(url);
  },
  add: (data) => {
    const url = `/admin/brands`;
    return axiosClient.post(url, data);
  },
  update: (data) => {
    const url = `/admin/brands/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove: (id) => {
    const url = `/admin/brands/${id}`;
    return axiosClient.delete(url);
  },
};

export default adminBrandApi;
