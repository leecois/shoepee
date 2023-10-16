import axiosClient from './axiosClient';
import { API_BASE_URL } from '../config/apiConfig'

const userApi = {
    register(data) {
        const url = `${API_BASE_URL}/save`;
        return axiosClient.post(url, data);
    },
};

export default userApi;