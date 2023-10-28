import { useEffect, useState } from 'react';
import productApi from '../api/productApi';
import modelApi from '../api/modelApi';

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await modelApi.get(productId);
        setProduct(response);
        console.log(response);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading};
}
