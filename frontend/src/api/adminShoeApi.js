import axiosClient from './axiosClient';

const adminShoeApi = {
  async getAll(params) {
    try {
      const response = await axiosClient.get('/auth/shoes', {
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
  add: async (modelId, data) => {
    try {
      const response = await axiosClient.post(`/admin/addshoe/${modelId}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  addimage: async (data) => {
    try {
      const response = await axiosClient.post('/admin/addimageshoe', data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (data) => {
    try {
      const response = await axiosClient.patch(`/admin/shoes/${data.id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  remove: async (id) => {
    try {
      const response = await axiosClient.delete(`/admin/shoes/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default adminShoeApi;
