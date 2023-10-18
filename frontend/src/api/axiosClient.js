import axios from "axios";
import { API_BASE_URL } from "config/apiConfig";

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    // Xử lý thành công cho các phản hồi từ máy chủ
    return response.data;
  },
  function (error) {
    // Xử lý lỗi cho các phản hồi từ máy chủ
    const { config, status, data } = error.response;

    // Kiểm tra nếu URL thuộc danh sách URL cần xử lý
    const URLS = ["/login", "/register"];
    if (URLS.includes(config.url) && status === 400) {
      const errorList = data.data || [];
      const firstError = errorList[0] || {};
      const messageList = firstError.messages || [];
      const firstMessage = messageList[0] || {};
      throw new Error(firstMessage.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
