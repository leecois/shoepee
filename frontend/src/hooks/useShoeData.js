import { useEffect, useState } from 'react';
import shoeApi from '../api/shoeApi';

const useProductData = () => {
  const [shoeList, setShoeList] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await shoeApi.getAll({
          _page: page,
          _limit: limit,
        });
        setShoeList(data);
      } catch (error) {
        if (error.response && error.response.status) {
          console.log('Error fetching product list: ' + error.message);
        } else {
          console.log('Error fetching product list: Unexpected error');
        }
      }
    };

    fetchData();
  }, [page, limit]);

  return { shoeList };
};

export default useProductData;
