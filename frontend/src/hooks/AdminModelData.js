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

        // Chỉnh sửa logic lọc ở đây
        const filteredData = data.filter((model) => {
          // Bỏ qua trạng thái của brandDto và chỉ kiểm tra status của model
          if (model.status === 'available') {
            // Nếu có shoes, chỉ giữ lại những shoes có status là available
            if (model.shoes && model.shoes.length) {
              model.shoes = model.shoes.filter(
                (shoe) => shoe.status === 'available'
              );
            }
            return true;
          }
          return false;
        });

        setModelList(filteredData);
      } catch (error) {
        console.error('Error fetching product list:', error.message);
      }
    };

    fetchData();
  }, [page, limit]);

  const deleteModel = async (id) => {
    try {
      await adminModelApi.remove(id);
      setModelList((prevModelList) =>
        prevModelList.filter((model) => model.id !== id)
      );
    } catch (error) {
      console.error('Error deleting model: ' + error.message);
    }
  };

  const addModel = async (id) => {
    try {
      const response = await adminModelApi.add(id);
      return response.data;
    } catch (error) {
      console.error('Error adding model: ' + error.message);
    }
  };

  const updateModel = async (id, updatedData) => {
    try {
      const updateModel = await adminModelApi.update(id, updatedData);
      const updateModelList = modelList.map((model) =>
        model.id === id ? updateModel : model
      );
      setModelList(updateModelList);
    } catch (error) {
      console.error('Error updating brand: ' + error.message);
    }
  };

  return { modelList, deleteModel, addModel, updateModel };
};

export default AdminModelData;
