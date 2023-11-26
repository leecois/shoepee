import { useEffect, useState } from 'react';
import modelApi from '../api/modelApi';

export default function useProductDetail(modelname) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false); // Added state to track if the product is not found

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await modelApi.get(modelname);

        // Check if the response contains product data
        if (!response || Object.keys(response).length === 0) {
          setNotFound(true); // Set notFound to true if no product data is found
        } else {
          const availableShoes =
            response.customizedShoes?.filter((shoe) => shoe.status === 'available') || [];
          const updatedProduct = { ...response, customizedShoes: availableShoes };
          setProduct(updatedProduct);
          setNotFound(false); // Ensure notFound is false if product data is found
        }
      } catch (error) {
        console.log('Failed to fetch product', error);
        setNotFound(true); // Set notFound to true in case of an error
      } finally {
        setLoading(false);
      }
    })();
  }, [modelname]);

  return { product, loading, notFound };
}
