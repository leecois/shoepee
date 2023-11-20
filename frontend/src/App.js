import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './Authentication/ProtectedRoute';
import AdminRouters from './Routers/AdminRouters';
import CustomerRouters from './Routers/CustomerRouters';
import { AlertProvider } from './customer/components/Alert/AlertContext';

const App = () => {
  return (
    <AlertProvider>
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <AdminRouters />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AlertProvider>
  );
};

export default App;
