import { useEffect, useState } from 'react';
import brandApi from '../api/brandApi';

const useBrandData = () => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await brandApi.getAll();
        setBrandList(data);
      } catch (error) {
        if (error.response && error.response.status) {
          console.log('Error fetching product list: ' + error.message);
        } else {
          console.log('Error fetching product list: Unexpected error');
        }
      }
    };

    fetchData();
  }, []);

  return { brandList };
};

export default useBrandData;
