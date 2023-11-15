import { useEffect, useState } from 'react';
import modelApi from '../api/modelApi';

const useModelData = (searchKey, brandFilter) => {
  const [modelList, setModelList] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          searchKey: searchKey,
          page,
          limit,
        };

        if (brandFilter) {
          params.brand = brandFilter;
        }

        const { data } = await modelApi.getAll(params);
        setModelList(data);
      } catch (error) {
        const errorMsg = error.response && error.response.status 
          ? 'Error fetching product list: ' + error.message
          : 'Error fetching product list: Unexpected error';
        console.log(errorMsg);
      }
    };

    fetchData();
  }, [page, limit, searchKey, brandFilter]);

  return { modelList };
};

export default useModelData;
