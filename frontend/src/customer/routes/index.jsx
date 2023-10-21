import { lazy } from 'react';

const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
const ProductDetail = lazy(() => import('../pages/ProductPage/ProductDetail'));
const Cart = lazy(() => import('../components/Cart/Cart'));
const ShoeCustomizer = lazy(() => import('../pages/ShoeCustomizer'));

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
  {
    path: '/Cart',
    title: 'Cart',
    component: Cart,
  },
  {
    path: '/customizer',
    title: 'Customizer',
    component: ShoeCustomizer,
  },
];

const routes = [...coreRoutes];
export default routes;
