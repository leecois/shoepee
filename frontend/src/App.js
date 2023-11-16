import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRouters from './Routers/AdminRouters';
import CustomerRouters from './Routers/CustomerRouters';
import StorageKeys from './constants/storage-keys';
import ErrorPage from './customer/pages/ErrorPage';
import ProtectedRoute from './Authentication/ProtectedRoute';

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={'ADMIN'}>
              <AdminRouters />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
