import { useEffect, useState } from 'react';
import adminModelApi from '../api/adminModelApi';

const AdminModelData = () => {
  const [modelList, setModelList] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await adminModelApi.getAll({
          _page: page,
          _limit: limit,
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
  }, [page, limit]);

  return { modelList };
};

export default AdminModelData;