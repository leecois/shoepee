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

        const sortedModels = data.map((model) => ({
          ...model,
          shoes: model.shoes.sort((a, b) => a.id - b.id),
        }));
        setModelList(sortedModels);
        
        const filteredData = data.filter((model) => {
          // Filter out entire model if the brand status is unavailable
          if (model.brandDto && model.brandDto.status === 'unavailable') {
            return false;
          }
          if (model.status === 'available') {
            // Filter individual shoes within the model
            if (model.shoes && model.shoes.length) {
              model.shoes = model.shoes.filter(
                (shoe) => shoe.status === 'available'
              );
            }

            return true;
          }
        });

        setModelList(filteredData);
      } catch (error) {
        console.error('Error fetching product list:', error.message);
      }
    };

    fetchData();
  }, [page, limit]);

  return { modelList };
};

export default useModelData;
