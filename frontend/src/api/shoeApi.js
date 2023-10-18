import axiosClient from "./axiosClient";

const shoeApi = {
  getAll: (params) => {
    const url = `/shoes`;
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/shoes/${id}`;
    return axiosClient.get(url);
  },
  add: (data) => {
    const url = `/shoes`;
    return axiosClient.post(url, data);
  },
  update: (data) => {
    const url = `/shoes/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove: (id) => {
    const url = `/shoes/${id}`;
    return axiosClient.delete(url);
  },
};

export default shoeApi;
