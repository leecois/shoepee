import { useEffect, useState } from 'react';
import modelApi from '../api/modelApi';

const useModelData = () => {
  const [modelList, setModelList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await modelApi.getAll({
          _page: page,
          _limit: limit,
        });
        setModelList(data);
        console.log(data);
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

  return { modelList };
};

export default useModelData;
