import axiosClient from './axiosClient';

const shoeApi = {
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
  async get(productId) {
    try {
      const response = await axiosClient.get(
        `/auth/getshoemodelbyname/${productId}`
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  add: async (data) => {
    try {
      const response = await axiosClient.post('/products', data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (data) => {
    try {
      const response = await axiosClient.patch(`/products/${data.id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  remove: async (id) => {
    try {
      const response = await axiosClient.put(`/products/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default shoeApi;
