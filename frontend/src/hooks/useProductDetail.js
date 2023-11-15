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

        const availableShoes =
          response.shoes?.filter((shoe) => shoe.status === 'available') || [];

        const updatedProduct = { ...response, shoes: availableShoes };

        setProduct(updatedProduct);
      } catch (error) {
        console.log('Failed to fetch product', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [modelname]);

  return { product, loading };
}
