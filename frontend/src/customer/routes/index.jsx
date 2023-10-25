import { lazy } from 'react';

const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductPage/ProductDetailPage'));
const Cart = lazy(() => import('../components/Cart/Cart'));
const ShoeCustomize = lazy(() => import('../pages/ShoeCustomize'));

const coreRoutes = [
  {
    path: '/products',
    title: 'Products',
    component: ProductPage,
  },
  {
    path: '/products/:productId',
    title: 'Products Details',
    component: ProductDetailPage,
  },
  {
    path: '/Cart',
    title: 'Cart',
    component: Cart,
  },
  {
    path: '/customize',
    title: 'Customize',
    component: ShoeCustomize,
  },
];

const routes = [...coreRoutes];
export default routes;
