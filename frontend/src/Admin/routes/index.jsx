import { lazy } from 'react';
import Shoes from '../pages/Table/Shoes';

const Chart = lazy(() => import('../pages/Chart'));
const Brands = lazy(() => import('../pages/Table/Brands'));
const Sizes = lazy(() => import('../pages/Table/Sizes'));
const Accounts = lazy(() => import('../pages/Table/Accounts'));
const ShoeModels = lazy(() => import('../pages/Table/ShoeModels'));
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
    path: 'tables/shoes',
    title: 'Forms Elements',
    component: Shoes,
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
    path: 'tables/models',
    title: 'Form Layouts',
    component: ShoeModels,
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
