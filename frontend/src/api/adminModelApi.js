import axiosClient from './axiosClient';

const adminModelApi = {
  async getAll(params) {
    try {
      const response = await axiosClient.get('/admin/shoemodels', {
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
  async get(productId) {
    try {
      const response = await axiosClient.get(`/products/${productId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  add: async ( data) => {
    try {
      const response = await axiosClient.post(
        `/admin/addShoemodel`,
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      const response = await axiosClient.put(`/admin/editshoemode/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  remove: async (id) => {
    try {
      const response = await axiosClient.put(`/admin/deleteshoemodel/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default adminModelApi;
