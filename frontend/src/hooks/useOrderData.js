import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

const useOrderData = () => {
  const [orderList, setOrderList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `https://3.1.85.78/api/v1/admin/findAll`;

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosClient.get(url);
      setOrderList(response.data); // Assuming response.data contains the order list
    } catch (error) {
      console.error(
        'Error fetching order list:',
        error.message || 'Unexpected error'
      );
      setError(error.message || 'Unexpected error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return { orderList, isLoading, error };
};

export default useOrderData;
