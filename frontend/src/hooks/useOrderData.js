import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

const useOrderData = () => {
  const [orderList, setOrderList] = useState([]);
  const baseUrl = `https://3.1.85.78/api/v1/admin`;

  const fetchData = async () => {
    try {
      const data = await axiosClient.get(`${baseUrl}/findAll`);
      setOrderList(data);
    } catch (error) {
      console.error(
        'Error fetching order list:',
        error.message || 'Unexpected error'
      );
    }
  };

  const acceptOrder = async (orderId) => {
    try {
      await axiosClient.put(`${baseUrl}/acceptorder/${orderId}`);
      // Update orderList state here
      // For example, you might want to filter out the accepted order
      // or update its status in the list.
      setOrderList((prevOrderList) => {
        if (!Array.isArray(prevOrderList)) {
          return [];
        }
        return prevOrderList.map((order) =>
          order.orderId === orderId ? { ...order, accepted: true } : order
        );
      });
    } catch (error) {
      console.error(
        'Error accepting order:',
        error.message || 'Unexpected error'
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { orderList, acceptOrder };
};

export default useOrderData;
