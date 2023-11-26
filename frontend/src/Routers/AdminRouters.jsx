import { Suspense, lazy, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import Loader from '../Admin/common/Loader';
import Dashboard from '../Admin/pages/Dashboard/Dashboard';
import routes from '../Admin/routes';
import AlertModal from '../customer/components/Alert/Alert';
import { useAlert } from '../customer/components/Alert/AlertContext';

const DefaultLayout = lazy(() => import('../Admin/layout/DefaultLayout'));

function AdminRouters() {
  const { alert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <AlertModal
        message={alert.message}
        type={alert.type}
        isVisible={alert.isVisible}
        onClose={hideAlert}
      />
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
