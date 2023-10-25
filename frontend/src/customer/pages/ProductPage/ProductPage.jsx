import React from 'react';
import HeaderProduct from '../../components/Product/HeaderProduct';
import Product from '../../components/Product/Product';
import ProductList from '../../components/Product/ProductList';
import useProductData from '../../../hooks/useProductData';

const ProductPage = () => {
  const { productList } = useProductData();

  return (
    <div className="relative mx-auto py-8 sm:py-16 px-4 w-auto">
      <HeaderProduct />
      <div className="flex justify-between mt-4">
        <Product />
        <ProductList data={productList} />
      </div>
    </div>
  );
};

export default ProductPage;
