import React from 'react';
import HeaderProduct from '../../components/Product/HeaderProduct';
import Product from '../../components/Product/Product';
import ProductList from '../../components/Product/ProductList';
import useProductData from '../../../hooks/useProductData';
import Breadcrumb from '../../components/Breadcrumb';

const ProductPage = () => {
  const breadcrumbItems = [{ label: 'Products', url: '/products' }];
  const { productList } = useProductData();

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="relative mx-auto py-4 sm:py-8 px-4 w-auto">
        <HeaderProduct />
        <div className="flex justify-between mt-4">
          <Product />
          <ProductList data={productList} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
