import { useState, useEffect } from 'react';
import productApi from '../../../Api/productApi';

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const results = await productApi.get(productId);
        setProduct(results);
      } catch (error) {
        console.log('Faile to fetch product detail');
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}
