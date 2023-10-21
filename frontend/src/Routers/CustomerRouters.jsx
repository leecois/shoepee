import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Admin/common/Loader';
import HomePage from '../customer/pages/HomePage/HomePage';
import routes from '../customer/routes';
import ShoeCustomizer from '../customer/pages/ShoeCustomizer';

const DefaultLayout = lazy(() => import('../customer/layout/DefaultLayout'));

const CustomerRouters = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />

      <Routes>
        <Route path="/customizer" element={<ShoeCustomizer />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          {routes.map((route, index) => {
            const { path, component: Component } = route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
};

export default CustomerRouters;
