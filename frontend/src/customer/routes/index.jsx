import { lazy } from 'react';
import ProtectedRoute from '../../Authentication/ProtectedRoute';

const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
const ProductDetailPage = lazy(() =>
  import('../pages/ProductPage/ProductDetailPage')
);
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));
const StaffPage = lazy(() => import('../pages/StaffPage'));
const CheckoutPage = lazy(() => import('../pages/Checkout/CheckoutPage'));
const ShoeCustomize = lazy(() => import('../pages/ShoeCustomize'));
const ProfilePage = lazy(() => import('../pages/Account/ProfilePage'));
const PurchasePage = lazy(() => import('../pages/PurchasePage'));
const ChangePasswordPage = lazy(() => import('../pages/Account/ChangePasswordPage'));
const PaymentSuccessPage = lazy(() => import('../pages/PaymentSuccessPage'));
const Location = lazy(() => import('../components/Location/Location'));
const Contact = lazy(() => import('../components/Contact'));

const coreRoutes = [
  {
    path: '/products',
    title: 'Products',
    component: ProductPage,
  },
  {
    path: '/products/:modelname',
    title: 'Products Details',
    component: ProductDetailPage,
  },
  {
    path: '/cart',
    title: 'Cart',
    component: CartPage,
  },
  {
    path: '/checkout',
    title: 'Checkout',
    component: CheckoutPage,
  },
  {
    path: '/customize',
    title: 'Customize',
    component: ShoeCustomize,
  },
  {
    path: '/location',
    title: 'Location',
    component: Location,
  },
  {
    path: '/success',
    title: 'Payment Success',
    component: PaymentSuccessPage,
  },
  {
    path: '/user/account/profile',
    title: 'Profile',
    component: () => (
      <ProtectedRoute allowedRoles={['USER', 'MANAGER', 'ADMIN']}>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/user/account/change-password',
    title: 'Change Password',
    component: () => (
      <ProtectedRoute allowedRoles={['USER', 'MANAGER', 'ADMIN']}>
        <ChangePasswordPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/user/purchase',
    title: 'Profile',
    component: () => (
      <ProtectedRoute allowedRoles={['USER', 'MANAGER', 'ADMIN']}>
        <PurchasePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/staff',
    title: 'Staff',
    component: () => (
      <ProtectedRoute allowedRoles={['MANAGER']}>
        <StaffPage />
      </ProtectedRoute>
    ),
  },

  {
    path: '/contact',
    title: 'Contact',
    component: Contact,
  },
];

const routes = [...coreRoutes];
export default routes;
