import axiosClient from "./axiosClient";

const brandApi = {
  async getAll() {
    const url = `/auth/brands`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/brands/${id}`;
    return axiosClient.get(url);
  },
  add: (data) => {
    const url = `/brands`;
    return axiosClient.post(url, data);
  },
  update: (id) => {
    const url = `/brands/${id}`;
    return axiosClient.patch(url, id);
  },
  remove: (id) => {
    const url = `/brands/${id}`;
    return axiosClient.delete(url);
  },
};

export default brandApi;
