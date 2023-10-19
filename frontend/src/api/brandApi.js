import axiosClient from "./axiosClient";

const brandApi = {
  getAll: () => {
    const url = "/brand";
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/brand/${id}`;
    return axiosClient.get(url);
  },
  add: (data) => {
    const url = `/brand`;
    return axiosClient.post(url, data);
  },
  update: (data) => {
    const url = `/brand/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove: (id) => {
    const url = `/brand/${id}`;
    return axiosClient.delete(url);
  },
};

export default brandApi;
