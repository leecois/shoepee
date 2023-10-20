import { lazy } from 'react';

const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
const ProductDetail = lazy(() => import('../pages/ProductPage/ProductDetail'));

const coreRoutes = [
  {
    path: '/products',
    title: 'Products',
    component: ProductPage,
  },
  {
    path: '/products/product-detail/:id',
    title: 'Products Details',
    component: ProductDetail,
  },
];

const routes = [...coreRoutes];
export default routes;
