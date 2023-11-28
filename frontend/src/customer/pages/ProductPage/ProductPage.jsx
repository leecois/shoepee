import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useModelData from '../../../hooks/useModelData';
import Breadcrumb from '../../components/Breadcrumb';
import Filters from '../../components/Product/Filters';
import HeaderProduct from '../../components/Product/HeaderProduct';
import ProductList from '../../components/Product/ProductList';

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const searchKey = queryParam.get('searchKey') || '';

  const { modelList } = useModelData();
  const [filteredAndSortedModels, setFilteredAndSortedModels] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [openFilter, setOpenFilter] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    let updatedList = [...modelList];

    // Filter by search key
    if (searchKey) {
      updatedList = updatedList.filter(
        (model) =>
          model.modelname.toLowerCase().includes(searchKey.toLowerCase()) ||
          model.brandDto.brandName
            .toLowerCase()
            .includes(searchKey.toLowerCase())
      );
    }
    
    // Filter by selected brands
    if (selectedBrands.length > 0) {
      updatedList = updatedList.filter((model) =>
        selectedBrands.includes(model.brandDto?.brandName)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case 'price_asc':
        updatedList.sort((a, b) => a.shoes[0]?.price - b.shoes[0]?.price);
        break;
      case 'price_desc':
        updatedList.sort((a, b) => b.shoes[0]?.price - a.shoes[0]?.price);
        break;
      default:
        break;
    }

    setFilteredAndSortedModels(updatedList);
  }, [modelList, sortOption, selectedBrands, searchKey]);
  const noSearchResults = searchKey && filteredAndSortedModels.length === 0;
  const breadcrumbItems = [{ label: 'Products', url: '/products' }];

  return (
    <div className="flex flex-col min-h-screen">
      {' '}
      {/* Ensures full page height and column direction */}
      <Breadcrumb items={breadcrumbItems} />
      <HeaderProduct onSort={setSortOption} setOpenFilter={setOpenFilter} />
      <div className="flex-grow">
        {' '}
        {/* Ensures content below header takes up remaining space */}
        <div className="mx-auto py-4 sm:py-8 px-4 w-auto">
          <div className="flex flex-col md:flex-row justify-between mt-4">
            <Filters
              openFilter={openFilter}
              setOpenFilter={setOpenFilter}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />
            {noSearchResults ? (
              <div
                role="alert"
                className="rounded w-full h-32 p-4 flex items-center justify-center text-center"
              >
                <strong className="block font-bold text-xl text-red-800">
                  NO PRODUCTS FOUND FOR "{searchKey}"
                </strong>
              </div>
            ) : (
              <ProductList modelList={filteredAndSortedModels} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
