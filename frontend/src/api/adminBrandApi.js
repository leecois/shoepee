// adminBrandApi.js
import axiosClient from './axiosClient';

const adminBrandApi = {
  getAll: () => {
    const url = '/admin/brands';
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/admin/brands/${id}`;
    return axiosClient.get(url);
  },
  add: (data) => {
    const url = '/admin/addbrand';
    return axiosClient.post(url, data);
  },
  update: (id, data) => { 
    const url = `/admin/editbrand/${id}`; 
    return axiosClient.put(url, data); 
  },
  remove: (id) => {
    const url = `/admin/deletebrand/${id}`;
    return axiosClient.put(url);
  },
};

export default adminBrandApi;
