import { useEffect, useState } from 'react';
import modelApi from '../api/modelApi';

export default function useProductDetail(modelname) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await modelApi.get(modelname);
        setProduct(response);
        console.log(response);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
      setLoading(false);
    })();
  }, [modelname]);

  return { product, loading};
}
