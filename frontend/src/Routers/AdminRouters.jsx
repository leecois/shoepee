import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from '../Admin/common/Loader';
import Dashboard from '../Admin/pages/Dashboard/Dashboard';
import routes from '../Admin/routes';

const DefaultLayout = lazy(() => import('../Admin/layout/DefaultLayout'));

function AdminRouters() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
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
}

export default AdminRouters;
