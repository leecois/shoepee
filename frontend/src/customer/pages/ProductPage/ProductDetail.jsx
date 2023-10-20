import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

const ProductDetail = () => {
  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: 'Current' },
  ];
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <ProductDetails />
    </div>
  );
};

export default ProductDetail;
