import { useEffect, useState } from 'react';
import sizeApi from '../api/sizeApi';

const useSizeData = () => {
  const [sizeList, setSizeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sizeApi.getAll();
        setSizeList(data);
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

  return { sizeList };
};

export default useSizeData;
