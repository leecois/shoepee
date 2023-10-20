import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Chart'));
const Products = lazy(() => import('../pages/Table/Products'));
const Brands = lazy(() => import('../pages/Table/Brands'));
const Sizes = lazy(() => import('../pages/Table/Sizes'));
const Accounts = lazy(() => import('../pages/Table/Accounts'));
const ShoeStyles = lazy(() => import('../pages/Table/ShoeStyles'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Orders = lazy(() => import('../pages/Orders'));

const coreRoutes = [
  {
    path: 'profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: 'tables/products',
    title: 'Forms Elements',
    component: Products,
  },
  {
    path: 'tables/brands',
    title: 'Form Layouts',
    component: Brands,
  },
  {
    path: 'tables/sizes',
    title: 'Form Layouts',
    component: Sizes,
  },
  {
    path: 'tables/accounts',
    title: 'Form Layouts',
    component: Accounts,
  },
  {
    path: 'tables/styles',
    title: 'Form Layouts',
    component: ShoeStyles,
  },
  {
    path: 'orders',
    title: 'Orders',
    component: Orders,
  },
  {
    path: 'settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: 'chart',
    title: 'Chart',
    component: Chart,
  },
  // {
  //   path: '/ui/alerts',
  //   title: 'Alerts',
  //   component: Alerts,
  // },
  // {
  //   path: '/ui/buttons',
  //   title: 'Buttons',
  //   component: Buttons,
  // },
];

const routes = [...coreRoutes];
export default routes;
