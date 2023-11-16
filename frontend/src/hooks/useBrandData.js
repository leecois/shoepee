import { useEffect, useState } from 'react';
import brandApi from '../api/brandApi';

const useBrandData = () => {
  const [brandList, setBrandList] = useState([]);

  const fetchData = async () => {
    try {
      let data = await brandApi.getAll();

      data = data
        .map((brand) => ({
          ...brand,
          shoeModel: brand.shoeModel
            ? brand.shoeModel.filter((model) => model.status === 'available')
            : [],
        }))
        .filter(
          (brand) => brand.status === 'available' && brand.shoeModel.length > 0
        );

      setBrandList(data);
    } catch (error) {
      console.error('Error fetching product list: ' + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { brandList };
};

export default useBrandData;
