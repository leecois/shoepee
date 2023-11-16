import { lazy } from 'react';
import Shoes from '../pages/Table/Shoes';

const Chart = lazy(() => import('../pages/Chart'));
const Brands = lazy(() => import('../pages/Table/Brands'));
const Sizes = lazy(() => import('../pages/Table/Sizes'));
const Accounts = lazy(() => import('../pages/Table/Accounts'));
const ShoeModels = lazy(() => import('../pages/Table/ShoeModels'));
const ShoeAdditionManager = lazy(() => import('../pages/ShoeAdditionManager'));
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
    title: 'Shoes',
    component: Shoes,
  },
  {
    path: 'tables/add-shoe/:modelId',
    title: 'Add Shoe',
    component: ShoeAdditionManager,
  },

  {
    path: 'tables/brands',
    title: 'Brands',
    component: Brands,
  },
  {
    path: 'tables/sizes',
    title: 'Sizes',
    component: Sizes,
  },
  {
    path: 'tables/accounts',
    title: 'Accounts',
    component: Accounts,
  },
  {
    path: 'tables/models',
    title: 'Shoe Models',
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
];

const routes = [...coreRoutes];
export default routes;