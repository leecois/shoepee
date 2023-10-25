import { useEffect, useState } from 'react';
import productApi from '../api/productApi';

const useProductData = () => {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await productApi.getAll({
          _page: page,
          _limit: limit,
        });
        setProductList(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching product list: ' + error.message);
      }
    };

    fetchData();
  }, [page, limit]);

  return { productList, page, setPage, limit, setLimit };
};

export default useProductData;
