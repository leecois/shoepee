import axiosClient from "./axiosClient";

const brandApi = {
  async getAll() {
    const url = `/brands`;
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
  update: (data) => {
    const url = `/brands/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove: (id) => {
    const url = `/brands/${id}`;
    return axiosClient.delete(url);
  },
};

export default brandApi;
