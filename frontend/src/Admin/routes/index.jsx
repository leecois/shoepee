import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Chart'));
const Shoes = lazy(() => import('../pages/Table/Shoes'));
const Brands = lazy(() => import('../pages/Table/Brands'));
const Sizes = lazy(() => import('../pages/Table/Sizes'));
const Accounts = lazy(() => import('../pages/Table/Accounts'));
const ShoeModels = lazy(() => import('../pages/Table/ShoeModels'));
const ShoeAdditionManager = lazy(() =>
  import('../pages/Manager/ShoeAdditionManager')
);
const ModelAddManager = lazy(() => import('../pages/Manager/ModelAddManager'));
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
    path: 'tables/add-shoe',
    title: 'Add Shoe',
    component: ShoeAdditionManager,
  },

  {
    path: 'tables/add-model',
    title: 'Add Shoe Model',
    component: ModelAddManager,
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
