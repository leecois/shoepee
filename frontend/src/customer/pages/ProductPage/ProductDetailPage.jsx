import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

import useProductDetail from '../../../hooks/useProductDetail.js';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { product, loading } = useProductDetail(productId);

  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: `${product.name}` },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;
