import React, { useState, useEffect } from 'react';
import useModelData from '../../../hooks/useModelData';
import Breadcrumb from '../../components/Breadcrumb';
import Filters from '../../components/Product/Filters';
import HeaderProduct from '../../components/Product/HeaderProduct';
import ProductList from '../../components/Product/ProductList';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('q');
  const { modelList } = useModelData(searchTerm);
  const [sortedData, setSortedData] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [openFilter, setOpenFilter] = useState(true);

  useEffect(() => {
    sortProducts(sortOption);
  }, [modelList, sortOption]);

  const sortProducts = (option) => {
    setSortOption(option);
    let sortedProducts = [...modelList];
    switch (option) {
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'price_asc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setSortedData(sortedProducts);
  };

  const breadcrumbItems = [{ label: 'Products', url: '/products' }];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="relative mx-auto py-4 sm:py-8 px-4 w-auto">
        <HeaderProduct onSort={sortProducts} setOpenFilter={setOpenFilter} />
        <div className="flex justify-between mt-4">
          <Filters openFilter={openFilter} setOpenFilter={setOpenFilter} />
          <ProductList modelList={sortedData} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
