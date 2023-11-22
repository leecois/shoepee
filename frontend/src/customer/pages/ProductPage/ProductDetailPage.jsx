import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

import useProductDetail from '../../../hooks/useProductDetail.js';
import { Skeleton } from '@mui/material';
import Stacked from '../../components/Stacked/Stacked.jsx';
import useModelData from '../../../hooks/useModelData.js';
import StorageKeys from '../../../constants/storage-keys.js';

const ProductDetailPage = () => {
  const { modelList } = useModelData();
  const { modelname } = useParams();
  const { product, loading, notFound } = useProductDetail(modelname);

  const isUserLoggedIn = () => {
    const token = localStorage.getItem(StorageKeys.TOKEN);
    return !!token; // returns true if token exists, false otherwise
  };
  const userLoggedIn = isUserLoggedIn();

  const breadcrumbItems = [
    { label: 'Products', url: '/products' },
    { label: `${product.modelname}` },
  ];

  if (loading) {
    return (
      <div className="min-h-screen mx-auto py-8 px-4 w-full max-w-7xl bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="order-2 lg:order-1 relative rounded-sm">
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: 'white' }}
              animation="wave"
              width="100%"
              height={630}
            />
          </div>
          <div className="order-1 lg:order-2 col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start">
            <Skeleton
              variant="text"
              sx={{ bgcolor: 'white' }}
              animation="wave"
              width="60%"
            />
            <Skeleton
              variant="text"
              sx={{ bgcolor: 'white' }}
              animation="wave"
              width="40%"
            />
            <Skeleton
              variant="text"
              sx={{ bgcolor: 'white' }}
              animation="wave"
              width="80%"
            />
            <Skeleton
              variant="text"
              sx={{ bgcolor: 'white' }}
              animation="wave"
              width="100%"
            />
            <Skeleton
              variant="text"
              sx={{ bgcolor: 'white' }}
              animation="wave"
              width="100%"
            />
            <Skeleton
              variant="text"
              sx={{ bgcolor: 'white' }}
              animation="wave"
              width="100%"
            />
            <Skeleton
              variant="text"
              sx={{ bgcolor: 'white' }}
              animation="wave"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
  if (notFound) {
    return <Navigate to="/nothing" replace />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <ProductDetails product={product} userLoggedIn={userLoggedIn} />
      {modelList.length > 0 && <Stacked modelList2={modelList} />}
    </div>
  );
};

export default ProductDetailPage;
