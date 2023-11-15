import { useEffect, useState } from 'react';
import adminShoeApi from '../api/adminShoeApi';

const AdminShoeData = () => {
  const [shoeList, setShoeList] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await adminShoeApi.getAll({
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
export const addShoeInformation = async (shoeInfo) => {
   try {
    const response = await adminShoeApi.add(shoeInfo);
    return response.data; // Assuming the API response contains the shoeId
  } catch (error) {
    throw error;
  }
};
export const addShoeImages = async (shoeId, imageUrls) => {
  try {
    const data = { shoeId, imageUrls };
    const response = await adminShoeApi.addimage(data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default AdminShoeData;
