import axiosClient from './axiosClient';

const adminShoeApi = {
  async getAll(params) {
    try {
      const response = await axiosClient.get('/admin/shoes', {
        params: {
          ...params,
          _start:
            !params._page || params._page <= 1
              ? 0
              : (params._page - 1) * (params._limit || 50),
        },
      });

      return {
        data: response,
        pagination: {
          page: params._page,
          limit: params._limit,
          total: response.length,
        },
      };
    } catch (error) {
      throw error;
    }
  },
  async get(shoeId) {
    try {
      const response = await axiosClient.get(`/admin/shoes/${shoeId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  add: async (data) => {
    try {
      const response = await axiosClient.post(`/admin/addshoe`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  addimage: async (shoeId ,data) => {
    try {
      const response = await axiosClient.post(`/admin/addimageshoe/${shoeId}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      const response = await axiosClient.put(`/admin/editshoe/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  remove: async (id) => {
    try {
      const response = await axiosClient.put(`/admin/deleteshe/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default adminShoeApi;
