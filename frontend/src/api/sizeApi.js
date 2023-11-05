import axiosClient from "./axiosClient";

const sizeApi = {
  async getAll() {
    const url = `/auth/sizes`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/sizes/${id}`;
    return axiosClient.get(url);
  },
  add: (data) => {
    const url = `/sizes`;
    return axiosClient.post(url, data);
  },
  update: (id) => {
    const url = `/sizes/${id}`;
    return axiosClient.patch(url, id);
  },
  remove: (id) => {
    const url = `/sizes/${id}`;
    return axiosClient.delete(url);
  },
};

export default sizeApi;
