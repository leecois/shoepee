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

        // Filter out shoes that are not available
        const availableShoes = data.filter(
          (shoe) => shoe.status === 'available'
        );

        setShoeList(availableShoes);
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

  const deleteShoe = async (id) => {
    try {
      await adminShoeApi.remove(id);
      setShoeList((prevShoeList) =>
        prevShoeList.filter((shoe) => shoe.id !== id)
      );
    } catch (error) {
      console.error('Error deleting shoe: ' + error.message);
    }
  };

  const updateShoe = async (id, updatedData) => {
    try {
      const { data: updatedShoe } = await adminShoeApi.update(id, updatedData);
      const updatedShoeList = shoeList.map((shoe) =>
        shoe.id === id
          ? { ...shoe, shoeModelDto: updatedShoe.shoeModelDto }
          : shoe
      );
      setShoeList(updatedShoeList);
    } catch (error) {
      console.error('Error updating shoe: ' + error.message);
    }
  };

  return { shoeList, deleteShoe, updateShoe };
};
export const addShoeInformation = async (shoeInfo) => {
  try {
    const response = await adminShoeApi.add(shoeInfo);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default AdminShoeData;
