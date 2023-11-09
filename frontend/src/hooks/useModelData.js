import { useEffect, useState } from 'react';
import modelApi from '../api/modelApi';

const useModelData = (searchTerm) => {
  const [modelList, setModelList] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await modelApi.getAll({
          q: searchTerm,
        });
        setModelList(data);
      } catch (error) {
        if (error.response && error.response.status) {
          console.log('Error fetching product list: ' + error.message);
        } else {
          console.log('Error fetching product list: Unexpected error');
        }
      }
    };

    fetchData();
  }, [page, limit, searchTerm]);

  return { modelList };
};

export default useModelData;
