import React from 'react';
import useModelData from '../../../hooks/useModelData';
import Breadcrumb from '../../components/Breadcrumb';
import Filters from '../../components/Product/Filters';
import HeaderProduct from '../../components/Product/HeaderProduct';
import ProductList from '../../components/Product/ProductList';

const ProductPage = () => {
  const breadcrumbItems = [{ label: 'Products', url: '/products' }];
  const { modelList } = useModelData();

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="relative mx-auto py-4 sm:py-8 px-4 w-auto">
        <HeaderProduct />
        <div className="flex justify-between mt-4">
          <Filters />
          <ProductList data={modelList} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
