import axiosClient from '../api/axiosClient';

const postCartData = async (cartData) => {
  const url = `/auth/addcart`;
  try {
    const response = await axiosClient.post(url, cartData);
    console.log('Cart data posted successfully:', response);
    return response;
  } catch (error) {
    console.error('Error posting cart data:', error);
    throw error;
  }
};

const fetchShoeImages = async (shoeId) => {
  const url = `/auth/getimageshoe/${shoeId}`;
  try {
    const response = await axiosClient.get(url);
    return response;
  } catch (error) {
    console.error('Error fetching shoe images:', error);
    throw error;
  }
};

export { postCartData, fetchShoeImages };
