import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

const useOrderData = () => {
  const [orderList, setOrderList] = useState([]);
  const url = `https://3.1.85.78/api/v1/auth/findAll`;

  const fetchData = async () => {
    try {
      const data = await axiosClient.get(url);
      setOrderList(data);
    } catch (error) {
      console.error(
        'Error fetching product list:',
        error.message || 'Unexpected error'
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { orderList };
};

export default useOrderData;
