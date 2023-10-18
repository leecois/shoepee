import axiosClient from "./axiosClient";

const createApiRequest = (endpoint) => (data) => {
  const url = `/${endpoint}`;
  return axiosClient.post(url, data);
};

const userApi = {
  register: createApiRequest("save"),
  login: createApiRequest("login"),
};

export default userApi;
