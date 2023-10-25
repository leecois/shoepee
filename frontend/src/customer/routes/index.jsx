import { lazy } from 'react';

const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductPage/ProductDetailPage'));
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));
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
    path: '/cart',
    title: 'Cart',
    component: CartPage,
  },
  {
    path: '/customize',
    title: 'Customize',
    component: ShoeCustomize,
  },
];

const routes = [...coreRoutes];
export default routes;
