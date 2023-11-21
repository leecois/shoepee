import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

const useOrderData = () => {
  const [orderList, setOrderList] = useState([]);
  const baseUrl = `https://3.1.85.78/api/v1/admin`;

  const fetchData = async () => {
    try {
      const  data = await axiosClient.get(`${baseUrl}/findAll`);
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
      console.log(`Order ${orderId} accepted successfully.`);
      fetchData(); // Refresh the order list
    } catch (error) {
      console.error(
        'Error accepting order:',
        error.message || 'Unexpected error'
      );
    }
  };

  const completeOrder = async (orderId) => {
    try {
      await axiosClient.put(`${baseUrl}/completedyorder/${orderId}`);
      fetchData();
    } catch (error) {
      console.error(
        'Error completing order:',
        error.message || 'Unexpected error'
      );
    }
  };

  const deliveryOrder = async (orderId) => {
    try {
      await axiosClient.put(`${baseUrl}/deliveryorder/${orderId}`);
      fetchData();
    } catch (error) {
      console.error(
        'Error updating delivery status:',
        error.message || 'Unexpected error'
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { orderList, acceptOrder, completeOrder, deliveryOrder };
};

export default useOrderData;
