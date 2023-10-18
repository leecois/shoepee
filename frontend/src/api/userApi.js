import axiosClient from "./axiosClient";
import { API_BASE_URL } from "../config/apiConfig";

const createApiRequest = (endpoint) => (data) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  return axiosClient.post(url, data);
};

const userApi = {
  register: createApiRequest("save"),
  login: createApiRequest("login"),
};

export default userApi;
