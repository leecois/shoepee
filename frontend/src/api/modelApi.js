import axiosClient from './axiosClient';

const modelApi = {
  async getAll(params) {
    try {
      const response = await axiosClient.get('/auth/shoemodels', {
        params: {
          ...params,
        },
      });

      return {
        data: response,
        pagination: {
          searchKey: params.searchKey,
          total: response.length,
        },
      };
    } catch (error) {
      throw error;
    }
  },
  async get(modelname) {
    try {
      const response = await axiosClient.get(
        `/auth/getshoemodelbyname/${modelname}`
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
      const response = await axiosClient.delete(`/shoemodels/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default modelApi;
